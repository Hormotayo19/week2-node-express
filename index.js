require('dotenv').config();

const express = require('express');
const app = express();


app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date()}`);
  next();
});

app.get('/', (req, res) => {
  res.send('My Week 2 API');
});

app.post('/user', (req, res) => {
  const {name, email} = req.body;
  if(!name || !email ) {
    return res.status(400).json({error : "name and email are required"});
  }
  res.send(`Hello, ${name}`);
});

app.get('/user/:id', (req, res) => {
  const id = req.params.id;
  res.send(`user ${id} profile`);
});

const PORT = process.env.PORT;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
}); 