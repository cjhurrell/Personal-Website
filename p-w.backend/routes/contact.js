const express = require('express');
const router = express.Router();
const db = require('../config/db');

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received contact form submission:', { name, email, message });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
  db.query(query, [name, email, message], (err, results) => {
    if (err) {
      console.error('DB insert error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(200).json({ message: 'Message received!' });
  });
});

module.exports = router;

