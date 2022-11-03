import { Application } from "express";
import express from 'express';

export abstract class BaseController {
  app: express.Application;
  
  constructor(app: Application) {
    this.app = app
  }

  abstract installRoutes(): void
}