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

    });
  }

}