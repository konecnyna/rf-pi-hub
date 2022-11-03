import { Request, Response } from "express";
import { BaseController } from "../base/BaseController";

export class RecordSignalController extends BaseController {
  installRoutes(): void {
    this.app.post('/', (req: Request, res: Response) => {
      const data = req.body;
      console.log(data);
      res.send(data);
    });
  }
}