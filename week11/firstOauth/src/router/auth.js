"use strict";

const { Router } = require("express");
const passport = require("passport");
require("../util/passport");

const authRouter = Router();

// we will hit this route to login
// will redirect us to google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// google will hit this route after we sign in


module.exports = authRouter;