import express from "express";
import { dayRouter } from "./day";
import { clockRouter } from "./clock";

export const router = express.Router();

router.use("/day", dayRouter);
router.use("/clock", clockRouter);
