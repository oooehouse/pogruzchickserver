const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const app = express();

//  Connect Database
connectDB();

//Init Middleware
app.use(
  express.json({
    extended: false
  })
);

app.use(
  cors({
    origin: [
      'https://globaevg.github.io',
      'http://localhost:3000/',
      'http://pogruzchik-bpi.by/'
    ]
  })
);

app.get('/', (req, res) => res.send('API Running'));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/vehicle-adv', require('./routes/api/adverts'));
//app.use('/api/feedbacks', require('./routes/api/feedbacks'));

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
