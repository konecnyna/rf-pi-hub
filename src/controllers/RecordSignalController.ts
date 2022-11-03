import { Application } from "express";
import { BaseController } from "../base/BaseController";

export class RecordSignalController extends BaseController {
  installRoutes(): void {
    this.app.post('/', (req, res) => {
      const data = req.body;
      console.log(data);
      res.send(data);
    });
  }
}