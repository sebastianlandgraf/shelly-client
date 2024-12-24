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
  connected = false;

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

    this.ws.onerror = (event): void => {
      this.emit('log', { level: 'error', message: event.message });
      //this.logger.error(event.message);
      this.connected = false;
      //this.emit('error', event);
    };
    this.ws.on('open', () => {
      this.connected = true;
      //this.logger.info('ws open');
      this.emit('open');
    });
    this.ws.on('ping', () => {
      try {
        if (this.ws?.readyState === WebSocket.OPEN) {
          this.ws?.pong();
        }
      } catch (e: unknown) {
        //this.logger.error(e);
      }
    });

    this.ws.on('close', this.OnWsClose.bind(this));
    this.ws.on('message', this.OnWsMessage.bind(this));
  }

  OnWsMessage(event: { toString: () => string }): void {
    const ev = JSON.parse(event.toString());
    //this.logger.debug(ev);

    this.emit('message', ev);

    if (ev.method === 'NotifyStatus') this.emit('NotifyStatus', ev);
  }

  OnWsClose(code: unknown, reason: Buffer): void {
    this.emit('log', {
      level: 'info',
      message: `websocket closed with code: ${code}, reason: ${reason.toString()}`,
    });
    this.connected = false;
    setTimeout(() => {
      this.connect();
    }, 10000);
  }

  private send(req: BaseRequest): number {
    if (req.retries && req.retries > 10) {
      this.emit('message', { id: req.id, error: 'send retries exeeded 10' });
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
    //this.logger.debug(msg);

    try {
      this.ws?.send(msgString);
    } catch (e: unknown) {
      //this.logger.error(e);
      return -1;
    }
    return req.id;
  }

  public async request(req: BaseRequest): Promise<BaseResponse> {
    //this.logger.debug(req);

    if (this.connected) {
      return new Promise<BaseResponse>((resolve) => {
        const msgId = this.send(req);
        const callback = (message: WsMessage) => {
          if (message.id === msgId) {
            this.removeListener('message', callback);
            if (message.error) {
              //this.logger.error(message.error);
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
