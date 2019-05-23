const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const Hostel = require('../database-mongodb/hostel');
const User = require('../database-mongodb/user');

const app = express();
const port = process.env.PORT || 3004;

app.use(morgan('dev'));

app.get('*.js', (req, res, next) => {
  req.url += '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
app.use('/hostels/:hostelId/reviews', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// eslint-disable-next-line func-names
app.get('/hostels/:hostelId', (req, res) => {
  const {
    hostelId,
  } = req.params;

  User.find({
    _id: hostelId,
  }, (err, hostel) => {
    console.log('in the find');
    if (err) {
      console.log('inside ERROR');
    } else {
      console.log('inside ELSE');
      res.send(hostel);
    }
  });
});

app.get('/api/hostels/:hostelId/reviews', (req, res) => {
  console.log('inside GET users');

  User.find({}, (err, users) => {
    if (err) {
      console.log('inside ERROR');
      throw err;
    } else {
      console.log('SEEING CHANGES??? USERS:', users);
      res.send(users);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}, PRODUCT DESCRIPTION`);
});
