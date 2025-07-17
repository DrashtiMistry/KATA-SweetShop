const express = require("express");
const router = express.Router();
const Sweet = require('../models/sweet');

router.get('/', async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.status(200).json(sweets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single sweet by ID
router.get('/:id', async (req, res) => {
  try {
    const sweet = await Sweet.findById(req.params.id);
    if (!sweet) return res.status(404).json({ message: 'Sweet not found' });
    res.json(sweet);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST: Create new sweet
router.post('/', async (req, res) => {
  try {
    const newSweet = new Sweet(req.body);
    await newSweet.save();
    res.status(201).json(newSweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT: Update sweet
router.put('/:id', async (req, res) => {
  try {
    const updatedSweet = await Sweet.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedSweet);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


// DELETE: Remove sweet
router.delete('/:id', async (req, res) => {
  try {
    await Sweet.findByIdAndDelete(req.params.id);
    res.json({ message: 'Sweet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
