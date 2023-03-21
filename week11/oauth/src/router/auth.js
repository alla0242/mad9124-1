"use strict";

const { Router } = require("express");
const passport = require("passport");

require("../util/passport");

const authRouter = Router();

// this redirects to google
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] })
);

// google sends response to this
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (_req, res) => res.redirect("/sucess")
);

module.exports = authRouter;
