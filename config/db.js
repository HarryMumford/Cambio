const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  console.log('Attempting to connect to mongo...')
  console.log(db)
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.log('Mongo did not connect')
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;