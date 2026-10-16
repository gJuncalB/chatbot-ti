require('dotenv').config();

const express = require('express');
const cors = require('cors');

const chatRouter = require('./routes/chat');
const ticketsRouter = require('./routes/tickets');
const aiRouter = require('./routes/ai');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRouter);
app.use('/api/tickets', ticketsRouter);
app.use('/api/ai', aiRouter);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
