const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const assert = require('assert');

class DataBase {
  constructor() {
    this.url = 'mongodb://localhost:27017/grid';
    return this
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(this.url, (err, db) => {
        if (err) reject(err)
        let dataBase = db
        resolve(dataBase)
      })
    })
  }

  getHeaders(db, resolve) {
    let contentArray = null;

    db.collection('headers').find().toArray((err, headers) => {
      if (err) console.log(err)

      contentArray = headers;

      db.collection('content').find().toArray((err, content) => {
        if (err) console.log(err)
        contentArray = contentArray.concat(content);

        resolve(contentArray)
      })

    })
  }

  getData() {
    let responseData = null;

    let db = null;
    return this.connect()
    .then(dataBase => {
      return new Promise((resolve, reject) => {
        db = dataBase;
        this.getHeaders(db, resolve)
      })
    })
    .then((contentArray) => {
      responseData = contentArray;
      db.close()
      return responseData;
    })
  }
}

module.exports = DataBase;
