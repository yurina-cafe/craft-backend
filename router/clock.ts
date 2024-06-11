import express from "express";

export const clockRouter = express.Router();

clockRouter.get("/", (req, res) => {
  const query = req.query as any;

  const user = query.user;
  if (!user) {
    res.send("user not found");
    return;
  }

  res.send(user);
});
