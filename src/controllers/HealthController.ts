import { Request, Response } from "express";
import { BaseController } from "../base/BaseController";

export class HealthController extends BaseController {
  installRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({ "health": "Operational" });
    });
  }
}