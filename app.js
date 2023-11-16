// app.js

const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Serve static files (including the background image)
app.use(express.static(path.join(__dirname, 'public')));

// Define the route for the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
