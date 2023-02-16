const students = require("../models/students");

const validateStudentId = (req, res, next) => {
  const { id } = req.params;
  const studentIdx = students.findIndex((student) => student.id === id);
  if (studentIdx < 0) {
    res.status(404).json({
      error: `Student with id ${id} not found`,
    });
    return;
  }
  const student = students[studentIdx];
  req.student = student;
  req.studentIdx = studentIdx;
  next();
};

module.exports = validateStudentId;
