const Sweet = require('./models/Sweet');

const getAllSweets = async (req, res) => {
  try {
    const sweets = await Sweet.find();
    res.status(200).json(sweets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sweets' });
  }
};

const addSweet = async (req, res) => {
  const { name, imageUrl, price, quantityAvailable } = req.body;

  if (!name || !imageUrl || !price || quantityAvailable == null) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newSweet = new Sweet({
      name,
      imageUrl,
      price,
      quantityAvailable,
    });

    await newSweet.save();
    res.status(201).json(newSweet);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add sweet' });
  }
};

const updateSweetById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSweet = await Sweet.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedSweet) {
      return res.status(404).json({ message: 'Sweet not found' });
    }

    res.status(200).json(updatedSweet);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllSweets, addSweet, updateSweetById };