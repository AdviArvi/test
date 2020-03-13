const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/index');
require('dotenv').config({ path: '.env' });


// mongoose.connect(process.env.DATABASE,{userNewUrlParser:true});
// mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost:27017/qliktagInterns', { useNewUrlParser: true })
.then((resp) => console.log('Success', resp))
.catch((err) => console.log('Error' , err));

const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/qliktagInterns', function(err, db) {
  if (err) throw err;
  const dbo = db.db("qliktagInterns");
  dbo.createCollection("users", function(err, res) {
    if (err) throw err;
    // console.log("Collection created!");
    db.close();
  });
});

//importing model
// require('./models/Store');

const app = require('./app');
app.set('port', process.env.PORT || 7700);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
