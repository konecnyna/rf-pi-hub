import WebSocket from 'ws';
import { EventBus, Event, EventType } from "./EventBus";

export class AppWebSocketServer {

  constructor(path: string, webSocketReady: (ws: WebSocket) => void) {
    EventBus.getInstance().subscribe("record_controller", (event: Event) => {
      const type = event.type;
      if (type === EventType.SERVER_UPGRADE) {
        const wss = new WebSocket.Server({ noServer: true, path })
        wss.on('connection', (ws: WebSocket) => {
          webSocketReady(ws)
        })

        // Feex meee
        type Test = {
          request: any,
          socket: any,
          head: any
        }
        const { request, socket, head } = event.payload as Test
        wss.handleUpgrade(request, socket, head, socket => {
          wss.emit('connection', socket, request);
        });
      }
    })
  }
}