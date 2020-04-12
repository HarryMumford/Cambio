const express = require('express');
const connectDB = require('./config/db');

const app = express();

var score = require('./routes/api/score')
app.use('/score', score)

connectDB();

app.get('/', (req, res) => res.send('Hello breakfast!!!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));