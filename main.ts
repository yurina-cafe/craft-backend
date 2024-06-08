import { BlogApp } from "./app";

const app = new BlogApp();
app.initBodyParser();
app.initRouter();
app.listenOnPort(3000);
