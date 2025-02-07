const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (e.g., CSS, images) from the "public" folder
app.use(express.static('public'));

// Define a route that renders an EJS page
app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'Welcome to My EJS Page', message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
