const createDebug = require("debug");
const { NotFoundError, BadRequestError } = require("../utils/errors");
const Student = require("../models/Student");
const debug = createDebug("app:studentService");

const getAll = async () => {
  const allStudents = await Student.find();
  return allStudents;
};

const getOne = async (id) => {
  const student = await Student.findById(id);
  if (!student) {
    throw new NotFoundError(`Student with id ${id} not found`);
  }
  return student;
};

const create = async (name, grade) => {
  const newStudent = new Student({
    name,
    grade,
  });
  await newStudent.save();
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
