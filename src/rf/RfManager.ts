import { RfSignalRequest } from "./models/RfSignalRequest";
import { RpiRfCommandFactory } from "./RpiRfCommandFactory"
const { execSync } = require("child_process")

export class RfManager {
  commandFactory: RpiRfCommandFactory = new RpiRfCommandFactory()
  gpioPin = 17
  
  sendSignal(request: RfSignalRequest) {
    const cmd = this.commandFactory.makeSendSignalCliArgs(request, this.gpioPin)
    console.log(cmd)    
    return cmd
  }
}