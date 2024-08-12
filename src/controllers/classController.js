const classService = require('../services/classService');

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await classService.getAllClasses();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Class by id
const getClassById = async (req, res) => {
  try {
    const classId = req.params.id;
    const classData = await classService.getClassById(classId);
    res.status(200).json(classData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Create a new class
const createClass = async (req, res) => {
  try {
    const { name } = req.body;
    await classService.createClass(name);
    res.status(201).json({ message: 'Class created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a class by ID
const updateClass = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedClass = await classService.updateClass(id, name);
    if (!updatedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(201).json({ message: 'Class edited successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a class by ID
const deleteClass = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClass = await classService.deleteClass(id);
    if (!deletedClass) {
      return res.status(404).json({ message: 'Class not found' });
    }
    res.status(201).json({ message: 'Class deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllClasses,
  getClassById,
  createClass,
  updateClass,
  deleteClass
};
