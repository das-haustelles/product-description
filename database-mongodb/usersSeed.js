// SEEDING SCRIPT
// "db:usersSeed": "node database-mongodb/usersSeed.js"

const faker = require('faker');
const db = require('./index.js');
const User = require('./user.js');

const sampleUsers = [];

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomGender() {
  const zeroOrOne = Math.floor(getRandomArbitrary(0, 2));
  if (zeroOrOne === 0) {
    return 'Male';
  }
  return 'Female';
}

function getRandomAge18To45() {
  return Math.floor(getRandomArbitrary(18, 45));
}

const travelExperience = {
  0: 'Novice Nomad',
  1: 'Avid Traveller',
  2: 'Globetrotter',
};

function getRandomTravelerExperience() {
  const travelerNum = Math.floor(getRandomArbitrary(0, 3));
  return travelExperience[travelerNum];
}

function randomNumber(minimum, maximum, precision) {
  const min = minimum === undefined ? 0 : minimum;
  const max = maximum === undefined ? 9007199254740992 : maximum;
  const precision1 = precision === undefined ? 0 : precision;

  const random = Math.random() * (max - min) + min;

  return random.toFixed(precision1);
}

function createReview(username) {
  const randomNumBetween4and10 = randomNumber(4, 10, 1);
  const randomHostelName = faker.company.companyName();
  const ratingWord = {
    4: 'Rating',
    5: 'Rating',
    6: 'Good',
    7: 'Very Good',
    8: 'Fabulous',
    9: 'Superb',
    10: 'Superb',
  };

  const avgRatingWord = ratingWord[Math.floor(randomNumBetween4and10)];

  const oneReview = {
    username,
    avgRating: randomNumBetween4and10,
    avgRatingWord,
    reviewText: faker.lorem.text(),
    reviewDate: faker.date.recent(),
    propertyReply: faker.lorem.text(),
    hostelName: randomHostelName,
  };

  return oneReview;
}

function createUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const username = `${lastName}_${firstName}`;
  const maleOrFemale = getRandomGender();
  const randomAge = getRandomAge18To45();
  const randomTravelExperience = getRandomTravelerExperience();
  const randomReviewNumber = Math.floor(getRandomArbitrary(1, 3));
  const userReviews = [];

  for (let i = 0; i < randomReviewNumber; i += 1) {
    const oneReview = createReview(username);
    userReviews.push(oneReview);
  }

  const oneUser = {
    usename: username,
    country: faker.address.country(),
    gender: maleOrFemale,
    age: randomAge,
    travelExperience: randomTravelExperience,
    totalReviews: randomReviewNumber,
    reviews: userReviews,
  };

  sampleUsers.push(oneUser);
}

for (let i = 0; i < 3; i += 1) {
  createUser();
}

function insertSampleUsers() {
  User.create(sampleUsers)
    .then(() => db.close())
    .catch(err => err);
}

insertSampleUsers();
