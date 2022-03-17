const express = require('express');
const connectDB = require('./db');
const fileUpload = require('express-fileupload');
const eventRoutes = require('./routes/eventRoutes');
const adminRoutes = require('./routes/adminRoutes');

connectDB();
const app = express();

//MIDDLEWARE
app.use(fileUpload());
app.use(express.urlencoded());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
//MIDDLEWARE

app.use('/api/events', eventRoutes);
app.use('/api/admins', adminRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server running on port 5000'));
