import express from "express";
import { getAllDays, getDay, getRecentThreeDays } from "../controller/day";

export const dayRouter = express.Router();

dayRouter.get("/all", (req, res) => {
  const query = req.query as any;

  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  res.send(getAllDays(user));
});

dayRouter.get("/recent", (req, res) => {
  const query = req.query as any;

  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  res.send(getRecentThreeDays(user));
});

dayRouter.get("/:dayName", (req, res) => {
  const query = req.query as any;

  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  const params = req.params as any;
  const dayName = params.dayName;
  const day = getDay(user, dayName);
  res.send(day);
});
