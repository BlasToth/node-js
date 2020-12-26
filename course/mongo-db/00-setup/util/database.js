const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://user:password@cluster0-try.zhddr.mongodb.net/<dbname>?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('connected!'); 
    callback(result);
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports = mongoConnect;