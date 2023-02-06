const students = [
  { id: "1", name: "tim", grade: "A+" },
  { id: "2", name: "jad", grade: "A+" },
  { id: "3", name: "hena", grade: "A+" },
  { id: "4", name: "eduardo", grade: "A+" },
];

const getAll = (_, res) => {
  res.json({
    data: students,
  });
};

const getOne = (req, res) => {
  const { id } = req.params;

  const student = students.find((student) => student.id === id);
  if (!student) {
    res.status(404).json({
      errors: [
        {
          message: `Student with id ${id} not found`,
        },
      ],
    });
    return;
  }

  res.json({
    data: student,
  });
};

const create = (req, res) => {
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
};
const replace = (req, res) => {
  const { id } = req.params;
  const newStudentData = req.body;
  const newStudent = {
    id,
    ...newStudentData,
  };

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

  students[idx] = newStudent;

  res.json({
    data: newStudent,
  });
};
const update = (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;

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

  res.json({ data: updatedStudent });
};
const deleteOne = (req, res) => {
  const { id } = req.params;

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

  const [deletedStudent] = students.splice(idx, 1);
  res.json({ data: deletedStudent });
};

module.exports = {
  getAll,
  getOne,
  create,
  replace,
  update,
  deleteOne,
};
