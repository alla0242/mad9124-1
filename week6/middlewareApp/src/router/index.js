const { Router } = require("express");
const studentRouter = require("./students");

const mainRouter = Router();

mainRouter.use("/students", studentRouter);
// mainRouter.use("/classes", classRouter);

module.exports = mainRouter;
