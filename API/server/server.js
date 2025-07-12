const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/usersdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// User Schema
const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  username: String,
  email: String,
  address: {
    street: String,
    suite: String,
    city: String,
    zipcode: String,
  },
  phone: String,
  website: String,
  company: {
    name: String,
    catchPhrase: String,
    bs: String,
  }
});

const User = mongoose.model('User', userSchema);

// ✅ GET: Last 5 Users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find().sort({ _id: -1 }).limit(10);
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching users' });
  }
});

// ✅ POST: Create User
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const saved = await newUser.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Error saving user', error });
  }
});

// ✅ PUT: Update User
app.put('/api/users/:id', async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(updated);
  } catch (error) {
    res.status(400).json({ message: 'Update failed', error });
  }
});

// ✅ DELETE: Remove User
app.delete('/api/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({ message: 'Delete failed', error });
  }
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
