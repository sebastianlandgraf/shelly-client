import { randomUUID } from 'crypto';
import WebSocket from 'ws';
import EventEmitter from 'events';
import { URL } from 'url';
import { BaseRequest, BaseResponse } from './types.js';

export type WsMessage = BaseResponse & {
  id: number;
  dst: string;
};

export class WebsocketClient extends EventEmitter {
  private ws?: WebSocket;
  private msgCounter = 0;
  private _connected = false;

  public get connected(): boolean {
    return this._connected;
  }

  public get wsState(): number| undefined {
    return this.ws?.readyState
  }

  constructor(
    public readonly baseUrl: URL,
    public readonly clientId = randomUUID({}),
  ) {
    super();
    this.connect();
  }

  private connect() {
    this.msgCounter = 0;
    const wsurl = `ws://${this.baseUrl.host}/rpc`;
    this.ws = new WebSocket(wsurl);

    this.ws.on('error', this.OnError.bind(this));
    this.ws.on('open', this.OnOpen.bind(this));
    this.ws.on('ping', this.OnPing.bind(this));
    this.ws.on('close', this.OnWsClose.bind(this));
    this.ws.on('message', this.OnWsMessage.bind(this));
  }

  private OnError(err: Error): void {
    this.emit('log', { level: 'error', message: err.message });
    this._connected = false;
  }

  private OnOpen(): void {
    this._connected = true;
    this.emit('log', { level: 'info', message: 'websocket connected' });
  }

  private OnPing(): void {
    try {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws?.pong();
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        this.emit('log', { level: 'error', message: err.message });
      }
      else {
        this.emit('log', { level: 'error', message: 'unknown error' });
      }
    }
  }

  private OnWsMessage(event: { toString: () => string }): void {
    const ev = JSON.parse(event.toString());
    //this.logger.debug(ev);

    this.emit('message', ev);

    if (ev.method === 'NotifyStatus') this.emit('NotifyStatus', ev);
  }

  private OnWsClose(code: unknown, reason: Buffer): void {
    this.emit('log', {
      level: 'info',
      message: `websocket closed with code: ${code}, reason: ${reason.toString()}`,
    });
    this._connected = false;
    setTimeout(() => {
      this.connect();
    }, 10000);
  }

  private send(req: BaseRequest): number {
    if (req.retries && req.retries > 10) {
      this.emit('log', {
        level: 'error',
        id: req.id,
        error: 'send retries exeeded 10',
      });
      return -1;
    }

    req.id = req.id ?? this.msgCounter++;

    if (this.ws?.readyState === WebSocket.CONNECTING) {
      req.retries = req.retries ? req.retries + 1 : 1;
      setTimeout(() => {
        this.send(req);
      }, 1000);

      return req.id;
    }
    if (this.ws?.readyState !== WebSocket.OPEN) return -1;

    const msg = { src: this.clientId, ...req };
    const msgString = JSON.stringify(msg);

    try {
      this.ws?.send(msgString);
    } catch (e: unknown) {
      if (e instanceof Error) {
        this.emit('log', {
          level: 'error',
          message: e.message,
          id: req.id,
        });
      } else {
        this.emit('log', {
          level: 'error',
          message: 'unknown error',
          id: req.id,
        });
      }
      return -1;
    }
    return req.id;
  }

  public async request(req: BaseRequest): Promise<BaseResponse> {
    //this.logger.debug(req);

    if (this._connected) {
      return new Promise<BaseResponse>((resolve) => {
        const msgId = this.send(req);
        if (msgId === -1) {
          resolve({
            result: null,
            id: msgId,
            error: 'not connected',
          });
        }
        const callback = (message: WsMessage) => {
          if (message.id === msgId) {
            this.removeListener('message', callback);
            if (message.error) {
              this.emit('log', {
                level: 'error',
                message: message.id,
                error: message.error,
              });
            }
            resolve(message);
          }
        };
        this.on('message', callback);
      });
    }
    throw 'not connected';
  }
}
