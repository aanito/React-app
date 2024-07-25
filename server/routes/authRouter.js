const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/UserModel');
const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Invalid email:', email);
      return res.status(401).json({ message: 'Invalid email' });
    }

    // Log the user found
    console.log('User found:', user);

    const hashedPassword = await bcrypt.hash(password, 10);

    // Check the password
    // const isMatch = await bcrypt.compare(password, user.password);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    if (!isMatch) {
      console.log('Invalid password for email:', email);
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Log successful login
    console.log('Login successful for email:', email);

    // Respond with the user data
    res.status(200).json({ message: 'Login successful', role: user.role, user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
});

module.exports = router;


// const express = require('express');
// const bcrypt = require('bcryptjs');
// const User = require('../models/UserModel');
// const router = express.Router();

// // Registration route
// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       name,
//       email,
//       password: hashedPassword
//     });

//     // Save the user to the database
//     const savedUser = await newUser.save();

//     res.status(201).json(savedUser);
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ message: 'Error registering user' });
//   }
// });

// router.post('/login', async (req, res) => {
//     const { email, password } = req.body;
  
//     try {
//       // Find the user by email
//       const user = await User.findOne({ email });
//       if (!user) {
//         return res.status(401).json({ message: 'Invalid email' });
//       }
  
//       // Check the password
//       const isMatch = await bcrypt.compare(password, user.password);
//       if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid password' });
//       }
  
//       // Respond with the user data
//       res.status(200).json({ message: 'Login successful', role: user.role, user });
//     } catch (error) {
//       console.error('Error logging in:', error);
//       res.status(500).json({ message: 'Error logging in' });
//     }
//   });

// module.exports = router;
