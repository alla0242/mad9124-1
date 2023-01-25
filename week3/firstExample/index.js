const express = require("express");

// RESOURCE
const students = [
  { id: "1", name: "tim", grade: "A+" },
  { id: "2", name: "roy", grade: "A+" },
  { id: "3", name: "teagan", grade: "A+" },
  { id: "4", name: "karina", grade: "A+" },
  { id: "5", name: "ikp", grade: "A+" },
];

// RESOURCE PATH: /students
// ENDPOINT: localhost:3000/students

const app = express();

app.use(express.json());

// CREATE
app.post("/students", (req, res) => {
  const { name } = req.body;

  const nextId = parseInt(students[students.length - 1].id, 10) + 1;

  const newStudent = {
    id: nextId.toString(),
    name,
  };

  students.push(newStudent);

  res.status(201).json({ data: newStudent });
});

// ROUTE: GET /student
// READ
app.get("/students", (req, res) => {
  res.json({ data: students });
});

// READ
app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  const student = students.find((student) => id === student.id);
  res.json({ data: student });
});

// UPDATE
app.put("/students/:id", (req, res) => {
  const { id } = req.params;
  const { name, grade } = req.body;

  const studentReplacement = {
    id,
    name,
    grade,
  };

  const studentIdx = students.findIndex((student) => student.id === id);
  students[studentIdx] = studentReplacement;

  res.json({ data: studentReplacement });
});

// UPDATE
app.patch("/students/grade/:id", (req, res) => {
  const { id } = req.params;
  const { grade } = req.body;

  const studentIdx = students.findIndex((student) => student.id === id);
  students[studentIdx].grade = grade;

  res.json({
    data: students[studentIdx],
  });
});

// UPDATE
app.patch("/students/name/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const studentIdx = students.findIndex((student) => student.id === id);
  students[studentIdx].name = name;

  res.json({
    data: students[studentIdx],
  });
});

app.patch("/studentsv1/:id", (req, res) => {
  const { id } = req.params;
  const studentUpdates = req.body;

  const studentIdx = students.findIndex((student) => student.id === id);
  Object.assign(students[studentIdx], studentUpdates);

  res.json({
    data: students[studentIdx],
  });
});

app.patch("/students/:id", (req, res) => {
  const { id } = req.params;
  const studentUpdates = req.body;

  const studentIdx = students.findIndex((student) => student.id === id);

  // spreads out the objects into a new object.
  const updatedStudent = {
    ...students[studentIdx],
    ...studentUpdates,
  };

  students[studentIdx] = updatedStudent;

  res.json({
    data: students[studentIdx],
  });
});

app.delete("/students/:id", (req, res) => {
  const { id } = req.params;

  const studentIdx = students.findIndex((student) => student.id === id);
  // splice will remove from the index, a number of items, and replace with something else optionally
  students.splice(studentIdx, 1);

  res.json({
    data: students,
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log("Server is running :)");
});
