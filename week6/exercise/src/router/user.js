const { Router } = require("express");
const userRouter = Router();

/**
 * id: number;
 * name: string;
 * email: string;
 */
const users = [];

userRouter.get("/", () => {
  // return array of users
});

//apply middleware
userRouter.post("/", () => {
  // create a user, and add to array
});
