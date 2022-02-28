const { connect, connection } = require('mongoose');

const connectionString =
'mongodb://localhost:27017/IgniteDB';

// Wrap Mongoose around local connection to MongoDB
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = connection;

