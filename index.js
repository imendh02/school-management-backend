const express = require('express');
const connectDB = require('./src/config/db');
const classRoutes = require('./src/routes/classRoutes');
const studentRoutes = require('./src/routes/studentRoutes');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);

