import express = require('express');
const cors = require('cors');
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());

const port = 3001;

app.get('/message', (req, res) => {
  res.json({message: 'Check'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
