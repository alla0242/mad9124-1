const students = [
  { id: "1", name: "tim", grade: "A+" },
  { id: "2", name: "jad", grade: "A+" },
  { id: "3", name: "hena", grade: "A+" },
  { id: "4", name: "eduardo", grade: "A+" },
];

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

const deleteOne = (id) => {
  const idx = students.findIndex((student) => student.id === id);
  const [deletedStudent] = students.splice(idx, 1);
  return deletedStudent;
};

const getAll = () => {
  return students;
};

const getOne = (id) => {
  const student = students.find((student) => student.id === id);
  return student;
};

const replace = (id, name, grade) => {
  const updatedStudent = {
    id,
    name,
    grade,
  };

  const idx = students.findIndex((student) => student.id === id);

  students[idx] = updatedStudent;
  return updatedStudent;
};

const update = (id, updatedFields) => {
  const idx = students.findIndex((student) => student.id === id);

  const updatedStudent = {
    ...students[idx],
    ...updatedFields,
  };

  students[idx] = updatedStudent;
  return updatedStudent;
};

module.exports = {
  create,
  deleteOne,
  getAll,
  getOne,
  replace,
  update,
};
