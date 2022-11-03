export type RfSignalRequest = {
  protocol: number
  pulseLength: number
  code_on: Array<number>
  code_off: Array<number>
  signal_repetitions: number
}