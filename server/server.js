const express = require('express');
const connectDB = require('./db');
const sweetRoutes = require('./routes/sweetRoutes');

const app = express();
const PORT = 5000;

const cors = require('cors');

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());

app.use('/api/sweets', require('./routes/sweetRoutes'));

connectDB();

app.get('/', (req, res) => {
  console.log(' Welcome to Sweet Shop Management System ');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});