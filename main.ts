import { BlogApp } from "./app";

const app = new BlogApp();
app.initCORS();
app.initBodyParser();
app.initRouter();
app.listenOnPort(3333);
