import express from "express";
import bodyParser from "body-parser";
import { router } from "./router";

export class BlogApp {
  app: express.Application;
  constructor() {
    this.app = express();
  }

  initRouter() {
    this.app.use(router);
  }

  initBodyParser() {
    this.app.use(bodyParser.json());
  }

  listenOnPort(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
}
