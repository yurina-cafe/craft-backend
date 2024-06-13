import express from "express";
import { completeClock, getAvaliableClock } from "../controller/clock";
import { Clock } from "../types/activity";

export const clockRouter = express.Router();

clockRouter.get("/all", (req, res) => {
  const query = req.query as any;

  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  const clocks: Clock[] = getAvaliableClock(user);
  res.send(clocks);
});

clockRouter.post("/complete", (req, res) => {
  const query = req.query as any;
  const body = req.body as any;

  const user = query.user;
  const currentPoromodo = body.currentPoromodo;
  const startTime = body.startTime;
  const endTime = body.endTime;

  if (!user || !currentPoromodo) {
    res.send("user or clockId not found");
    return;
  }

  const clock = completeClock(user, currentPoromodo, startTime, endTime);
  res.send(clock);
});
