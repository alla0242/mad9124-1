const students = require("../models/students");

const isAuthenticated = (req, res, next) => {
  const { user_id } = req.headers;

  const student = students.find((student) => student.id === user_id);

  if (!student) {
    res.status(401).json({
      error: "You must be signed in.",
    });
    return;
  }
  
  req.user = student;
  next();
};

module.exports = isAuthenticated;
