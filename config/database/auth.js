const mongo = require('mongodb');
const url = "mongodb://localhost:27017/whis";

export const testDB = (email) => {
  mongo.connect(url, (err, db) => {
    if (err) throw err;
    console.log(email);
    console.log('connected?');
  });
};
