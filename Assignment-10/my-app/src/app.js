const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());

app.get('/users', async (req, res) => {
  const result = await db.query('SELECT id, name FROM users ORDER BY id');
  res.json(result.rows);
});

app.post('/users', async (req, res) => {
  const { name } = req.body;
  const result = await db.query('INSERT INTO users(name) VALUES($1) RETURNING id, name', [name]);
  res.status(201).json(result.rows[0]);
});

module.exports = app;
