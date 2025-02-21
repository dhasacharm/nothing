const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist/village/browser/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/village/browser/index.html'));
});

app.listen(3000, () => {
  console.log('App running on http://localhost:3000');
});
