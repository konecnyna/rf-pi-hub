enum EventType {
  APP_STARTED,
  SERVER_UPGRADE
}

type Event = {
  type: EventType,
  payload: object
}

class EventBus {
  public static myProp = "Hello";
  private static instance: EventBus | null = null;
  private listeners = new Map<string, (event: Event) => void>()

  private constructor() {
  }

  public static getInstance(): EventBus {
    if (this.instance === null) {
      this.instance = new EventBus();
    }

    return this.instance
  }

  public subscribe(key: string, listener: (event: Event) => void) {
    this.listeners.set(key, listener)
  }

  public unsubscribe(key: string) {
    this.listeners.delete(key)
  }

  public sendEvent(event: Event) {
    this.listeners.forEach((value: (eventType: Event) => void, key: string) => {
      value(event)
    });
  }
}


export { Event, EventType, EventBus }