const createDebug = require("debug");
const debug = createDebug("app:studentService");

// RESOURCE
const students = [
  { id: "1", name: "tim", grade: "A+" }, //0
  { id: "2", name: "jad", grade: "A+" }, // 1
  { id: "3", name: "hena", grade: "A+" },
  { id: "4", name: "eduardo", grade: "A+" },
];

const getAll = () => {
  return students;
};

const getOne = (id) => {
  const student = students.find((student) => student.id === id);
  if (!student) {
    debug(`Student with id ${id} not found`);
  }
  // TODO
  //   if (!student) {
  //     res.status(404).json({
  //       errors: [
  //         {
  //           message: `Student with id ${id} not found`,
  //         },
  //       ],
  //     });
  return student;
};

const create = (name, grade) => {
  const id = parseInt(students[students.length - 1].id, 10) + 1;
  const newStudent = {
    id: id.toString(),
    name,
    grade,
  };
  students.push(newStudent);
  return newStudent;
};

const replace = (id, newStudentData) => {
  const newStudent = {
    id,
    ...newStudentData,
  };

  const idx = students.findIndex((student) => student.id === id);
  // TODO
  //   if (idx < 0) {
  //     res.status(404).json({
  //       errors: [
  //         {
  //           message: `Student with id ${id} not found`,
  //         },
  //       ],
  //     });
  //     return;
  //   }

  students[idx] = newStudent;
  return newStudent;
};

const update = (id, updatedFields) => {
  const idx = students.findIndex((student) => student.id === id);

  if (idx < 0) {
    res.status(404).json({
      errors: [
        {
          message: `Student with id ${id} not found`,
        },
      ],
    });
    return;
  }

  const updatedStudent = {
    ...students[idx],
    ...updatedFields,
  };

  students[idx] = updatedStudent;
  return updatedStudent;
};

const deleteOne = (id) => {
  const idx = students.findIndex((student) => student.id === id);
  // TODO
  //   if (idx < 0) {
  //     res.status(404).json({
  //       errors: [
  //         {
  //           message: `Student with id ${id} not found`,
  //         },
  //       ],
  //     });
  //     return;
  //   }

  const [deletedStudent] = students.splice(idx, 1);
  return deletedStudent;
};

module.exports = {
  getAll,
  getOne,
  create,
  replace,
  update,
  deleteOne,
};
