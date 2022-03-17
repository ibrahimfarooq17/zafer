const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('going');
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://ibrahimfarooq:1234@cluster0.t5hol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    );
    console.log(`MONGODB CONNECTED: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
