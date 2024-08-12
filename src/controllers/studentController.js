const studentService = require('../services/studentService');

// Get all students
const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get students by class ID
const getStudentsByClassId = async (req, res) => {
  const { classId } = req.params;
  try {
    const students = await studentService.getStudentsByClassId(classId);
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// email check
const checkEmail = async (req, res) => {
  try {
    const { email } = req.query;
    const exists = await studentService.isEmailTaken(email);
    res.json({ exists });
  } catch (error) {
    res.status(500).json({ error: 'Error checking email' });
  }
};

// Create a new student
const createStudent = async (req, res) => {
  try {
    const { firstName, lastName, email, classId } = req.body;
    await studentService.createStudent({ firstName, lastName, email, classId });
    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a student by ID
const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, classId } = req.body;
    const updatedStudent = await studentService.updateStudent(id, { firstName, lastName, email, classId });
    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(201).json({ message: 'Student edited successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a student by ID
const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedStudent = await studentService.deleteStudent(id);
    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(201).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllStudents,
  getStudentsByClassId,
  checkEmail,
  createStudent,
  updateStudent,
  deleteStudent
};
