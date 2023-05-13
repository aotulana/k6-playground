import express from 'express';
import bodyParser from 'body-parser';
import basicAuth from 'express-basic-auth';

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Basic authentication middleware
const auth = basicAuth({
  users: { admin: 'password' },
  challenge: true,
});

// GET endpoint
app.get('/hello', auth, (_req, res) => {
  res.send('Hello, World!');
});

// POST endpoint
app.post('/login', auth, (req, res) => {
  const { username, password } = req.body;
  if (username && password) {
    res.send(`Logging in user ${username}`);
  } else {
    res.status(400).send('Invalid request: username and password are required');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
