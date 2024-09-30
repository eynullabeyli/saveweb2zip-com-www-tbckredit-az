const express = require('express');
const path = require('path');

const app = express();
const PORT = 3009;

// Set the static folder where your HTML files are located
app.use(express.static(path.join(__dirname, '/')));

// Define a route for your homepage or any specific route (optional)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
