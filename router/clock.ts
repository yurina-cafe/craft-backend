import express from "express";
import { getAvaliableClock } from "../controller/clock";
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
