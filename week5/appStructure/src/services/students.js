const createDebug = require("debug");
const { NotFoundError, BadRequestError } = require("../utils/errors");
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
    throw new NotFoundError(`Student with id ${id} not found`);
  }
  return student;
};

const create = (name, grade) => {
  if (!name || !grade) {
    throw new BadRequestError("Name and Grade required");
  }
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
  if (!newStudentData.name || !newStudentData.grade) {
    throw new BadRequestError("Name and Grade required");
  }

  const newStudent = {
    id,
    ...newStudentData,
  };

  const idx = students.findIndex((student) => student.id === id);

  if (idx < 0) {
    throw new NotFoundError(`Student with id ${id} not found`);
  }

  students[idx] = newStudent;
  return newStudent;
};

const update = (id, updatedFields) => {
  if (!Object.keys(updatedFields).length) {
    throw new BadRequestError("No changes given");
  }
  const idx = students.findIndex((student) => student.id === id);

  if (idx < 0) {
    throw new NotFoundError(`Student with id ${id} not found`);
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
  if (idx < 0) {
    throw new NotFoundError(`Student with id ${id} not found`);
  }

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
