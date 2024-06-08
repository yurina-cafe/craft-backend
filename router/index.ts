import express from "express";
import { clockController } from "../controller/clock";
import { Clock } from "../types/clock";

export const router = express.Router();
router.post("/", (req, res) => {
  const clock: Clock = req.body;
  console.log(`接收到 clock`, req);

  if (clock) {
    clockController.add(clock);
    res.send(true);
  } else {
    res.send(false);
  }
});

router.get("/", (_, res) => {
  res.send(clockController.getAll());
});
