const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);

});
const express = require('express');
const app = express();

// Global middleware
app.use(express.json()); // Parses JSON bodies
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});



const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
const PORT = 3000;

app.use(express.json()); // Middleware to parse JSON

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


  app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

