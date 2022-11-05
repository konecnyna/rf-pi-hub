import { App } from './App';
import { EventBus, EventType } from './base/EventBus';


const app: any = new App().getApp();
const PORT: number = 3000;
const server = app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
  // EventBus.getInstance().sendEvent(EventType.APP_STARTED)
});

server.on('upgrade', (request: any, socket: any, head: any) => {
  EventBus.getInstance().sendEvent({
    type: EventType.SERVER_UPGRADE,
    payload: { request, socket, head }
  })
});

