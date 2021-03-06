const express = require('express');
const connectDB = require('./config/db')

const app = express();

// connect DB 

connectDB();

app.get('/', (req, res) => res.send('local host can be reached on postman'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));