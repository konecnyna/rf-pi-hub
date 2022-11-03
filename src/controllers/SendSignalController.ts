import { Application, Request, Response } from "express";
import { BaseController } from "../base/BaseController";
import { RfManager } from "../rf/RfManager";

export class SendSignalController extends BaseController {
  private rfManager: RfManager

  constructor(app: Application) {
    super(app)
    this.rfManager = new RfManager()
  }
  installRoutes(): void {
    this.app.get('/send-signal', (req: Request, res: Response) => {
      const cmd = this.rfManager.sendSignal({
        protocol: 1,
        pulseLength: 69,
        code_on: [1, 2, 3],
        code_off: [4, 5, 6],
        signal_repetitions: 10
      })

      res.json({ cmd })
    });
  }

}