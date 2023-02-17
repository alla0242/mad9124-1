const { Router } = require("express");
const isAuthenticated = require("../middleware/isAuthenticated");
const isAuthorized = require("../middleware/isAuthorized");
const validateStudentId = require("../middleware/validateStudentId");
const students = require("../models/students");

const studentRouter = Router();

// Router level midddleware
studentRouter.use((req, res, next) => {
  console.log("student router only");
  next();
});

// CREATE
studentRouter.post("/", isAuthenticated, (req, res) => {
  const { name, grade } = req.body;

  if (!name || !grade) {
    res.status(400).json({
      error: "Name and Grade required",
    });
  } else {
    const id = parseInt(students[students.length - 1].id, 10) + 1;
    const newStudent = {
      id: id.toString(),
      name,
      grade,
    };
    students.push(newStudent);

    res.status(201).json({ data: newStudent });
  }
});

// READ
studentRouter.get("/", (req, res) => {
  console.log("user", req.user);
  res.json({
    data: students,
  });
});

// READ
studentRouter.get(
  "/:id",
  // Route level middleware
  validateStudentId,
  (req, res) => {
    const { student } = req;
    res.json({
      data: student,
    });
  }
);

// UPDATE
studentRouter.put("/:id", isAuthenticated, validateStudentId, (req, res) => {
  const { student, studentIdx } = req;
  const newStudentData = req.body;

  const newStudent = {
    id: student.id,
    ...newStudentData,
  };

  students[studentIdx] = newStudent;

  res.json({
    data: newStudent,
  });
});

// UPDATE
studentRouter.patch(
  "/:id",
  isAuthenticated,
  isAuthorized("USER"),
  validateStudentId,
  (req, res) => {
    const { student, studentIdx } = req;

    //   const updatedStudent = {
    //       id: student.id,
    //       // name: student.name,
    //       grade: student.grade,
    //       name: req.body.name,
    //   }
    // const updatedStudent = Object.assign({}, student, req.body);
    const updatedStudent = {
      ...student,
      ...req.body,
    };

    students[studentIdx] = updatedStudent;

    res.json({ data: updatedStudent });
  }
);

// DELETE
studentRouter.delete(
  "/:id",
  isAuthenticated,
  isAuthorized("ADMIN"),
  validateStudentId,
  (req, res) => {
    const { studentIdx } = req;

    const [deletedStudent] = students.splice(studentIdx, 1);
    res.json({ data: deletedStudent });
  }
);

module.exports = studentRouter;
