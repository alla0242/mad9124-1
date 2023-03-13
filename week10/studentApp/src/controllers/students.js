const StudentService = require("../services/students");

const getAll = async (_req, res, next) => {
  try {
    const data = await StudentService.getAll();
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

const getOne = async (req, res, next) => {
  const { id } = req.params;
  try {
    const data = await StudentService.getOne(id);
    res.json({ data });
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  const { name, grade } = req.body;
  try {
    const data = await StudentService.create(name, grade);
    res.status(201).json({ data });
  } catch (error) {
    next(error);
  }
};

const replace = (req, res) => {
  const { id } = req.params;
  const data = StudentService.replace(id, req.body);
  res.json({ data });
};

const update = (req, res) => {
  const { id } = req.params;
  const updatedFields = req.body;
  const data = StudentService.update(id, updatedFields);

  res.json({ data });
};

const deleteOne = (req, res) => {
  const { id } = req.params;
  const deletedStudent = StudentService.deleteOne(id);
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
