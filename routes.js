const express = require('express');
const pool = require('./db');
const router = express.Router();

// Ruta para crear un usuario
router.post('/users', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    //se valida que el email no exista
    const emailExist = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (emailExist.rows.length > 0) {
        return res.status(400).json({ error: 'El email ya está registrado' });
        }

    const result = await pool.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
      [name, email, password]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear usuario' });
  }
});

// Ruta para listar todos los usuarios
router.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, email, created_at FROM users');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
});

module.exports = router;
