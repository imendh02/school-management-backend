const Class = require('../models/Class');
const Student = require('../models/Student');

// Get all classes
const getAllClasses = async () => {
  try {
    let classes = await Class.find();
    classes = await Promise.all(
      classes.map(async (classItem) => {
        const students = await Student.find({ classId: classItem._id });
        return {
          ...classItem._doc,
          students,
        };
      })
    );
    return classes;
  } catch (error) {
    throw new Error(`Error retrieving classes: ${error.message}`);
  }
};

const getClassById = async (classId) => {
  try {
    const classItem = await Class.findById(classId);
    if (!classItem) {
      throw new Error('Class not found');
    }
    const students = await Student.find({ classId: classItem._id });
    return {
      ...classItem._doc,
      students,
    };
  } catch (error) {
    throw new Error(`Error retrieving class: ${error.message}`);
  }
};

// Create a new class
const createClass = async (name) => {
    try {
        const newClass = new Class({ name });
        await newClass.save();
    } catch (error) {
        throw new Error(`Error creating class: ${error.message}`);
    }
};

// Update a class by ID
const updateClass = async (id, name) => {
  try {
    return await Class.findByIdAndUpdate(id, { name }, { new: true });
  } catch (error) {
    throw new Error(`Error updating class: ${error.message}`);
  }
};

// Delete a class by ID
const deleteClass = async (id) => {
  try {
    return await Class.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(`Error deleting class: ${error.message}`);
  }
};

module.exports = {
  createClass,
  getAllClasses,
  getClassById,
  updateClass,
  deleteClass
};
