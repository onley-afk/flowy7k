const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generar JWT
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

// Registro
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    
    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: 'Usuario ya existe' });
    
    const user = new User({
      name,
      email,
      password,
      phone
    });
    
    await user.save();
    
    const token = generateToken(user._id);
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });
    
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) return res.status(400).json({ error: 'Contraseña incorrecta' });
    
    const token = generateToken(user._id);
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener perfil del usuario (requiere token)
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar perfil
router.put('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Token no proporcionado' });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByIdAndUpdate(decoded.id, req.body, { new: true });
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;