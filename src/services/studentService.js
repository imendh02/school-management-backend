const Student = require('../models/Student');

// Get all students
const getAllStudents = async () => {
  return await Student.find();
};

// Get students by class ID
const getStudentsByClassId = async (classId) => {
  try {
    const students = await Student.find({ classId }).populate('classId');
    return students;
  } catch (error) {
    throw new Error('Unable to fetch students by class ID');
  }
};

// method to check if email is already taken
const isEmailTaken = async (email) => {
  try {
    const existingStudent = await Student.findOne({ email });
    return !!existingStudent;
  } catch (error) {
    throw new Error('Error checking email');
  }
};

// Create a new student
const createStudent = async (studentData) => {
    const student = new Student(studentData);
    await student.save();
};

// Update a student by ID
const updateStudent = async (id, studentData) => {
  return await Student.findByIdAndUpdate(id, studentData, { new: true });
};

// Delete a student by ID
const deleteStudent = async (id) => {
  return await Student.findByIdAndDelete(id);
};

module.exports = {
  createStudent,
  getAllStudents,
  isEmailTaken,
  getStudentsByClassId,
  updateStudent,
  deleteStudent
};
