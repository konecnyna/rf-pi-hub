import { BaseController } from "../base/BaseController";

export class HealthController extends BaseController {
  installRoutes(): void {
    this.app.get('/', (req, res) => {
      res.json({ "health": "Operational" });
    });
  }
}