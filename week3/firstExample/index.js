"use strict";

const express = require("express");
const app = express();

// RESOURCE
const students = [
  { id: "1", name: "tim", grade: "A+" }, //0
  { id: "2", name: "jad", grade: "A+" }, // 1
  { id: "3", name: "hena", grade: "A+" },
  { id: "4", name: "eduardo", grade: "A+" },
  { id: "5", name: "nikki", grade: "A+" },
];

// this just tells express to expect JSON data in the request body
app.use(express.json());

app.get("/", (_, res) => {
  res.json({ data: { message: "Server Running" } });
});

// CREATE
// curl --header "Content-Type: application/json" localhost:3000/students -X POST -d '{"name":"diego", "grade": "A+"}'
app.post("/students", (req, res) => {
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
app.get("/students", (_, res) => {
  res.json({
    data: students,
  });
});

// READ
app.get("/students/:id", (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => student.id === id);

  res.json({
    data: student,
  });
});

// UPDATE
// curl --header "Content-Type: application/json" localhost:3000/students/1 -X PUT -d '{"name":"nicolas", "grade": "B+"}'
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const newStudentData = req.body;
  const newStudent = {
    id,
    ...newStudentData,
  };

  const idx = students.findIndex((student) => student.id === id);

  students[idx] = newStudent;

  res.json({
    data: newStudent,
  });
});

// UPDATE
// curl --header "Content-Type: application/json" localhost:3000/students/1/grade -X PATCH -d '{"grade": "B+"}'
app.patch("/students/grade/:id", (req, res) => {
  const { id } = req.params;
  const { grade } = req.body;

  const idx = students.findIndex((student) => student.id === id);
  students[idx].grade = grade;

  res.json({ data: students[idx] });
});

// UPDATE
// curl --header "Content-Type: application/json" localhost:3000/students/1 -X PATCH -d '{"name": "stephen", "grade": "B+"}'
app.patch("/students/:id", (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

  const idx = students.findIndex((student) => student.id === id);

  const updatedStudent = {
    ...students[idx],
    ...updatedFields,
  };

  students[idx] = updatedStudent;

  res.json({ data: updatedStudent });
});

// DELETE
app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const idx = students.findIndex((student) => student.id === id);

  students.splice(idx, 1);
  res.json({ data: students });
});

app.post("/test", (req, res) => {
  console.log(req.body);
  res.send("hellow");
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server running on port 3000");
});
