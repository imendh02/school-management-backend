const express = require('express');
const classController = require('../controllers/classController');

const router = express.Router();

// GET /classes: Get all classes
router.get('/', classController.getAllClasses);

// GET /classes/:id: Get class by id
router.get('/:id', classController.getClassById);

// PUT /classes: Create a new class
router.put('/', classController.createClass);

// PATCH /classes/:id: Update an existing class
router.patch('/:id', classController.updateClass);

// DELETE /classes/:id: Delete a class
router.delete('/:id', classController.deleteClass);

module.exports = router;
