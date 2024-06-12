const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// La parola chiave corretta
const correctKeyword = 'correct-keyword';

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/check-keyword', (req, res) => {
  const { keyword } = req.body;
  if (keyword === correctKeyword) {
    res.json({ message: 'Correct keyword!' });
  } else {
    res.json({ message: 'Incorrect keyword, try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
