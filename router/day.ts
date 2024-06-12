import express from "express";
import {
  getAllDays,
  getDay,
  getRecentThreeDays,
  setDayActivity,
  setDayFeeling,
} from "../controller/day";

export const dayRouter = express.Router();

/**
 * get
 */
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

/**
 * set & modify
 */
dayRouter.post("/:dayName/feeling", (req, res) => {
  const query = req.query as any;
  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  const params = req.params as any;
  const dayName = params.dayName;
  const feeling = req.body.feeling;
  setDayFeeling(user, dayName, feeling);
  res.send("success");
});

dayRouter.post("/:dayName/activities", (req, res) => {
  const query = req.query as any;
  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  const params = req.params as any;
  const dayName = params.dayName;
  const activities = req.body.activities;
  setDayActivity(user, dayName, activities);
  res.send("success");
});
