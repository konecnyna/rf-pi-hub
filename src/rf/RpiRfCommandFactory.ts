import { RfSignalRequest } from "./models/RfSignalRequest"

export class RpiRfCommandFactory {
  makeSendSignalCliArgs(sendRequest: RfSignalRequest, gpioPin: number): string {
    const argsMap = new Map()

    argsMap.set("code", "1234")
    argsMap.set("-g", gpioPin)
    argsMap.set("-p", sendRequest.pulseLength)
    argsMap.set("-t", sendRequest.protocol)
    argsMap.set("-l", 24)
    argsMap.set("-r", 10)

    const args = Array.from(argsMap.keys()).map(key => `${key} ${argsMap.get(key)}`)
    return `rpi-rf ${args.join(" ")}`
  }
}