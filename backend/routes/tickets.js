const express = require('express');
const db = require('../db');

const router = express.Router();

function getQueuePosition(ticket) {
  const row = db
    .prepare(
      `SELECT COUNT(*) AS total FROM tickets
       WHERE category = ? AND status = 'fila' AND id < ?`
    )
    .get(ticket.category, ticket.id);

  return ticket.status === 'fila' ? row.total + 1 : null;
}

function serializeTicket(ticket) {
  return {
    id: ticket.id,
    protocolo: ticket.protocolo,
    category: ticket.category,
    description: ticket.description,
    userName: ticket.user_name,
    status: ticket.status,
    consentAccepted: !!ticket.consent_accepted,
    consentAt: ticket.consent_at,
    createdAt: ticket.created_at,
    updatedAt: ticket.updated_at,
    queuePosition: getQueuePosition(ticket)
  };
}

router.get('/', (req, res) => {
  const { category, status } = req.query;

  let query = 'SELECT * FROM tickets';
  const conditions = [];
  const params = [];

  if (category) {
    conditions.push('category = ?');
    params.push(category);
  }

  if (status) {
    conditions.push('status = ?');
    params.push(status);
  }

  if (conditions.length) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  query += ' ORDER BY created_at ASC';

  const tickets = db.prepare(query).all(...params);
  res.json(tickets.map(serializeTicket));
});

router.post('/', (req, res) => {
  const { category, description, userName } = req.body;

  if (!category || !description || !userName) {
    return res
      .status(400)
      .json({ error: 'category, description e userName são obrigatórios' });
  }

  const insert = db
    .prepare(
      `INSERT INTO tickets (protocolo, category, description, user_name)
       VALUES (?, ?, ?, ?)`
    )
    .run('TEMP', category, description, userName);

  const id = insert.lastInsertRowid;
  const protocolo = `TI-${new Date().getFullYear()}-${String(id).padStart(4, '0')}`;

  db.prepare('UPDATE tickets SET protocolo = ? WHERE id = ?').run(protocolo, id);

  const ticket = db.prepare('SELECT * FROM tickets WHERE id = ?').get(id);

  console.log(`✅ Chamado ${protocolo} criado — categoria: ${category} | usuário: ${userName}`);

  res.status(201).json(serializeTicket(ticket));
});

router.get('/:id', (req, res) => {
  const ticket = db
    .prepare('SELECT * FROM tickets WHERE id = ?')
    .get(req.params.id);

  if (!ticket) {
    return res.status(404).json({ error: 'Chamado não encontrado' });
  }

  res.json(serializeTicket(ticket));
});

router.post('/:id/consent', (req, res) => {
  const { accepted } = req.body;
  const ticket = db
    .prepare('SELECT * FROM tickets WHERE id = ?')
    .get(req.params.id);

  if (!ticket) {
    return res.status(404).json({ error: 'Chamado não encontrado' });
  }

  db.prepare(
    `UPDATE tickets
     SET consent_accepted = ?, consent_at = datetime('now'), updated_at = datetime('now')
     WHERE id = ?`
  ).run(accepted ? 1 : 0, req.params.id);

  const updated = db.prepare('SELECT * FROM tickets WHERE id = ?').get(req.params.id);

  console.log(`📝 Consentimento ${accepted ? 'ACEITO' : 'RECUSADO'} para o chamado #${req.params.id}`);

  res.json(serializeTicket(updated));
});

router.patch('/:id/status', (req, res) => {
  const { status } = req.body;
  const validStatuses = ['fila', 'em_atendimento', 'resolvido'];

  if (!validStatuses.includes(status)) {
    return res.status(400).json({ error: 'Status inválido' });
  }

  const ticket = db
    .prepare('SELECT * FROM tickets WHERE id = ?')
    .get(req.params.id);

  if (!ticket) {
    return res.status(404).json({ error: 'Chamado não encontrado' });
  }

  db.prepare(
    `UPDATE tickets SET status = ?, updated_at = datetime('now') WHERE id = ?`
  ).run(status, req.params.id);

  const updated = db.prepare('SELECT * FROM tickets WHERE id = ?').get(req.params.id);

  console.log(`🔄 Chamado #${req.params.id} mudou para status: ${status}`);

  res.json(serializeTicket(updated));
});

module.exports = router;
