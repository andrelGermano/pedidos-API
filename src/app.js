const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let pedidos = [];
let rotas = [];

app.get('/pedidos', (req, res) => {
  res.json(pedidos);
});

app.post('/pedidos', (req, res) => {
  const pedido = req.body;
  pedidos.push(pedido);
  res.status(201).json(pedido);
});

app.get('/rotas', (req, res) => {
  res.json(rotas);
});

app.post('/rotas', (req, res) => {
  const rota = req.body;
  rotas.push(rota);
  res.status(201).json(rota);
});

app.get('/melhor-rota/:id', (req, res) => {
  const rotaId = req.params.id;
  // Implementar lógica para encontrar a melhor rota
  res.json({ message: 'Melhor rota calculada' });
});

module.exports = app;
