import { Application } from "express";
import { BaseController } from "../base/BaseController";
import { HealthController } from "./HealthController";
import { RecordSignalController } from "./RecordSignalController";
import { SendSignalController } from "./SendSignalController";


class ControllerManager {
  installRoutes(app: Application) {
    const controllerList = [
      new HealthController(app),
      new SendSignalController(app),
      new RecordSignalController(app)
    ]

    controllerList.forEach((controller: BaseController) => {
      controller.installRoutes()
    })

  }
}

export { ControllerManager }