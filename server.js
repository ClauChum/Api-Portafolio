const express = require('express');
const app = express();
const PORT = 3000;

const posts = [
  {
    id: 1,
    title: 'Prueba 1',
    content: 'Contenido'
  },
  {
    id: 2,
    title: 'Prueba 2',
    content: 'Cafsdfafhdgsdf'
  }
];

app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});