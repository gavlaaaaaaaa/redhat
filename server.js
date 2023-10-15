const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;

app.use(bodyParser.json());

let users = [];

app.get('/api', (req, res) => {
  res.send('Welcome to the API base URL.');
});

app.get('/api/user', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).send('User added successfully.');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

