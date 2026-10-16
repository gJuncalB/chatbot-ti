const express = require('express');
const { categories } = require('../triage');

const router = express.Router();

const categoryIds = categories.map((category) => category.id).concat('outro');

const SYSTEM_PROMPT =
  'Você é um assistente de suporte de TI de uma empresa. ' +
  'Responda sempre em português, de forma curta e objetiva, ' +
  'com no máximo 4 passos práticos para o funcionário tentar resolver o problema. ' +
  'Não use markdown, apenas frases curtas separadas por linha. ' +
  'Na última linha da resposta, escreva apenas: CATEGORIA: seguido de uma destas ' +
  `opções, sem acentos: ${categoryIds.join(', ')}.`;

router.post('/', async (req, res) => {
  const { message } = req.body;

  if (!message || !message.trim()) {
    return res.status(400).json({ error: 'Mensagem não pode ser vazia' });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({
      error: 'GEMINI_API_KEY não configurada no servidor'
    });
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: 'user', parts: [{ text: message }] }],
        generationConfig: { maxOutputTokens: 1024, temperature: 0.4 }
      })
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error('Erro da API Gemini:', response.status, detail);
      return res
        .status(response.status === 429 ? 429 : 502)
        .json({ error: 'Não foi possível consultar a IA no momento.' });
    }

    const data = await response.json();
    const parts =
      (data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts) ||
      [];
    const text = parts.map((part) => part.text || '').join('\n').trim();

    if (!text) {
      return res.status(502).json({ error: 'A IA não retornou resposta.' });
    }

    const match = text.match(/CATEGORIA:\s*(\w+)/i);
    const category =
      match && categoryIds.includes(match[1].toLowerCase())
        ? match[1].toLowerCase()
        : 'outro';

    const reply = text.replace(/CATEGORIA:\s*\w+/i, '').trim();

    res.json({ category, reply, source: 'ia' });
  } catch (error) {
    console.error(error);
    res.status(502).json({ error: 'Não foi possível consultar a IA no momento.' });
  }
});

module.exports = router;
