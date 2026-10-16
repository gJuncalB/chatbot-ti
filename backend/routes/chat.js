const express = require('express');
const { classify } = require('../triage');

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Mensagem não pode ser vazia' });
  }

  const category = classify(message);

  res.json({
    category: category.id,
    categoryLabel: category.label,
    reply: category.suggestion
  });
});

module.exports = router;
