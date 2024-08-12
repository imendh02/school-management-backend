const express = require('express');
const studentController = require('../controllers/studentController');

const router = express.Router();

// GET /students: Get all students
router.get('/', studentController.getAllStudents);

// Get students by class ID
router.get('/class/:classId', studentController.getStudentsByClassId);

// Email check 
router.get('/email-check', studentController.checkEmail);

// PUT /students: Create a new student
router.put('/', studentController.createStudent);

// PATCH /students/:id: Update an existing student
router.patch('/:id', studentController.updateStudent);

// DELETE /students/:id: Delete a student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
