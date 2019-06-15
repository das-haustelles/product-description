const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const Hostel = require('../database-mongodb/hostel');
const User = require('../database-mongodb/user');

const app = express();
const port = process.env.PORT || 3004;

app.use(morgan('dev'));

// tell server to use bundle.js.gz file instead of bundle.js file
// app.get('*.js', (req, res, next) => {
//   req.url += '.gz';
//   res.set('Content-Encoding', 'gzip');
//   next();
// });
app.use('/hostels/:hostelId/reviews', express.static(path.join(__dirname, '../public')));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

// eslint-disable-next-line func-names


app.get('/api/hostels/:hostelId/reviews', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      throw err;
    } else {
      res.send(users);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}, PRODUCT DESCRIPTION`);
});
