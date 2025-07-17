const mongoose = require('mongoose');

const SweetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String, 
    required: true,
  },
  description: {
    type: String,
    default: 'No description available',
  },
  pricePerKg: {
    type: Number,
    required: true,
  },
  availableKg: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: ['Dry Fruit', 'Milk-Based', 'Bengali', 'Festival Special', 'Other'],
    default: 'Other',
  },
});


module.exports = mongoose.model('Sweet', SweetSchema);
