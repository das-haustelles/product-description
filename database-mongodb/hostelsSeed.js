// --script--
// "db:setup": "node database-mongodb/hostelsSeed.js"

const faker = require('faker');
const db = require('./index.js');
const Hostel = require('./hostel.js');

const sampleHostels = [];

function createHostel() {
  const oneHostel = {
    name: faker.company.companyName(),
    propertyDescription: faker.lorem.text(),
    houseRules: {
      policies: [
        'Age Restriction',
        'Credit Cards Accepted',
        'No Curfew',
        'Non Smoking'
      ]
    }
  };
  sampleHostels.push(oneHostel);
}

for (let i = 0; i < 3; i += 1) {
  createHostel();
}

// console.log(sampleHostels);

function insertSampleHostels() {
  Hostel.create(sampleHostels)
    .then(() => db.close())
    .catch(err => {
      return err;
    });
}

insertSampleHostels();
