const { Router } = require("express");
const userRouter = Router();

/**
 * id: number;
 * name: string;
 * email: string
 */
const users = [];

userRouter.get("/", (req, res) => {
  // your code here array of users
});

userRouter.post("/", (req, res) => {
  // your code here (hint, middleware)
});

module.exports = userRouter;
