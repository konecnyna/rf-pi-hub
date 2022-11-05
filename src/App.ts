import express from 'express';
import { ControllerManager } from './controllers/ControllerManager';

class App {
  private expressApp: express.Application;
  private controllerManager: ControllerManager

  constructor() {
    this.expressApp = express();
    this.expressApp.use(express.static(__dirname + '/src/public'));
    console.log(__dirname + '/src/public')
    this.controllerManager = new ControllerManager()
    this.controllerManager.installRoutes(this.expressApp)
  }


  public getApp(): express.Application {
    return this.expressApp;
  }
}

export { App }