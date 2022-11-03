import { Application } from "express";
import { BaseController } from "../base/BaseController";
import { HealthController } from "./HealthController";
import { RecordSignalController } from "./RecordSignalController";


class ControllerManager {
  installRoutes(app: Application) {
    const controllerList = [
      new HealthController(app),
      new RecordSignalController(app)
    ]

    controllerList.forEach((controller: BaseController) => {
      controller.installRoutes()
    })

  }
}

export { ControllerManager }