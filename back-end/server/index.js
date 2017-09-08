
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const multer = require('multer');

const upload = multer();
const app = express();

const DataBase = require('./dataBase.js');
const db = new DataBase();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getData', (req, res) => {
  console.log('Get req was received')
  db.getData()
  .then(data => { res.send(data) })
})

app.listen(8080, function () {
  console.log('App listening on port 8080!')
})
