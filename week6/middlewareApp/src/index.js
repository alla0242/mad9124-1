"use strict";

const express = require("express");
const morgan = require("morgan");
const { MulterError } = require("multer");
const multer = require("multer");
const logger = require("./middleware/logger");
const validateUser = require("./middleware/validateUser");
const studentRouter = require("./router/students");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const app = express();

// Application level middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("tiny"));
app.use(logger);

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.send("Hello, world");
});

app.post("/form", (req, res) => {
  console.log("body", req.body);
  res.json({
    some: "Thing",
  });
});

app.post("/upload/profilePic", upload.single("image"), (req, res) => {
  console.log("file", req.file);
  res.json({
    message: "image uploaded",
    image: `uploads/${req.file?.filename}`,
  });
});

app.post("/upload/album", upload.array("images", 2), (req, res) => {
  console.log("files", req.files);
  res.json({
    message: "Success",
  });
});

app.post("/user", validateUser, (req, res) => {
  console.log(req.user);
  res.json({ some: "thing" });
});

app.use("/students", studentRouter);

app.use((error, req, res, next) => {
  if (error instanceof MulterError) {
    res.status(400).json({
      error: error.message,
      code: error.code,
    });
    return;
  }
  res.status(500).json({ error: "something went wrong" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
