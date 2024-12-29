import Reseller from '../models/Reseller.js';

export const getResellers = async (req, res) => {
  try {
    const resellers = await Reseller.find();
    res.status(200).json(resellers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resellers', error: error.message });
  }
};

export const createReseller = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newReseller = new Reseller({ name, email, password });
    await newReseller.save();
    res.status(201).json(newReseller);
  } catch (error) {
    res.status(500).json({ message: 'Error creating reseller', error: error.message });
  }
};


