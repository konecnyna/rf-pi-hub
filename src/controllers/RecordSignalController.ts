import { Request, Response } from "express";
import WebSocket from 'ws';
import { AppWebSocketServer } from "../base/AppWebSocketServer";
const { spawn } = require("child_process");

import { BaseController } from "../base/BaseController";
import { WebSocketPayload } from "../base/WebSocketPayload";

const path = require('path');

export class RecordSignalController extends BaseController {
  ws: WebSocket | null = null

  installRoutes(): void {
    // Html page
    this.app.get('/record', async (req: Request, res: Response) => {
      await res.sendFile(path.join(__dirname, '../../public/record-page.html'))      
      new AppWebSocketServer("/ws/record", (ws: WebSocket) => {
        this.ws = ws;
        this.startRecordingSession()
      })
    });

    // Api
    this.app.post('/record', (req: Request, res: Response) => {
      const data = req.body;
      console.log(data, "starting record!");
      res.send({ status: "recording" });
    });

  }



  private startRecordingSession() {
    console.log("Starting recording session!")
    // const cmd = "/usr/bin/python3 rpi-rf-receive.py"
    const cmd = "ping"
    // const args: string[] = ["-g 17"]
    const args: string[] = ["www.google.com"]

    const child = spawn(cmd, args, {
      stdio: "pipe",
      detached: true
    });

    child.stdout.on("data", (data: any) => {
      const output = data.toString().trim();
      this.sendPayload({
        event: "data_output",
        payload: output
      })
      console.log(output);
    });

    child.stderr.on("data", (data: any) => {
      const output = data.toString().trim();
      this.sendPayload({
        event: "error_output",
        payload: output
      })
      console.log(output);
    });

    child.on("close", (code: number) => {
      this.sendPayload({
        event: "closed",
        payload: { exit_code: code }
      })

      if (code !== 0) {
        console.log(`Close: ${code}`);
      }
    });

    return child;
  }

  private sendPayload(payload: WebSocketPayload) {
    this.ws?.send(JSON.stringify(payload))
  }
}