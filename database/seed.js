import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from '../backend/src/models/Admin.js';
import Reseller from '../backend/src/models/Reseller.js';
import User from '../backend/src/models/User.js';

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing data
    await Admin.deleteMany();
    await Reseller.deleteMany();
    await User.deleteMany();

    // Seed admin data
    const admin = new Admin({
      name: 'Admin User',
      email: 'admin@example.com',
      password: await bcrypt.hash('adminpassword', 12),
    });
    await admin.save();

    console.log('Admin seeded successfully');

    // Add more seed data if necessary...

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

