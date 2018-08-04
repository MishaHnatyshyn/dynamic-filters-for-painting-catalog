'use strict';

const express = require('express');
const fs = require('fs');
const db = require('./db');

const app = express();

app.use(express.static('dist'));

app.get(/catalog/, (req, res) => {

  const data = JSON.parse(req.query.filter);

  const query = {
    price: {
      $gte: data.price_from,
      $lte: data.price_to
    }
  };

  if (data.master.length)query.master = { $in: data.master };
  if (data.category.length)query.category = { $in: data.category };
  if (data.technique.length)query.technique = { $in: data.technique };

  db.mydb.collection('painting').find(query).toArray().then(items => {
    res.end(JSON.stringify(items));
  }).catch(err => { throw err; });
});

app.get('/', (req, res)=>{
  res.end(fs.readFileSync('dist/index.html'))
});

app.listen(8080, () => {
  console.log('Listening on port 8080!');
  db.dbConnect();
}
);
