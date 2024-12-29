import Key from '../models/Key.js';

export const getAllKeys = async (req, res) => {
  try {
    const keys = await Key.find();
    res.status(200).json(keys);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching keys', error: error.message });
  }
};

export const createKey = async (req, res) => {
  const { validity, usageLimit } = req.body;
  try {
    const keyString = `KEY-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    const newKey = new Key({ key: keyString, validity, usageLimit });
    await newKey.save();
    res.status(201).json(newKey);
  } catch (error) {
    res.status(500).json({ message: 'Error creating key', error: error.message });
  }
};
