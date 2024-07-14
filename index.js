const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

// Use CORS middleware
app.use(cors());

// Serve static files from the "public" directory
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint to serve JSON data
app.get('/', (req, res) => {
  fs.readFile('data/templates.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.status(200).json(JSON.parse(data));
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
