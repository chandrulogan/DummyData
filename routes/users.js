var express = require('express');
var router = express.Router();
// var dummyData = require('../data/dummyData')

const data = [
  {
    "id": 1,
    "Name": "John Doe",
    "Email": "john.doe@example.com",
    "PhoneNumber": "1234567890"
  },
  {
    "id": 2,
    "Name": "Alice Smith",
    "Email": "alice.smith@example.com",
    "PhoneNumber": "9876543210"
  },
  {
    "id": 3,
    "Name": "Michael Johnson",
    "Email": "michael.johnson@example.com",
    "PhoneNumber": "5551234567"
  },
  {
    "id": 4,
    "Name": "Sara Davis",
    "Email": "sara.davis@example.com",
    "PhoneNumber": "7894561230"
  },
  {
    "id": 5,
    "Name": "David Brown",
    "Email": "david.brown@example.com",
    "PhoneNumber": "3216540987"
  },
  {
    "id": 6,
    "Name": "Emily Wilson",
    "Email": "emily.wilson@example.com",
    "PhoneNumber": "1112223333"
  },
  {
    "id": 7,
    "Name": "Kevin Miller",
    "Email": "kevin.miller@example.com",
    "PhoneNumber": "4445556666"
  },
  {
    "id": 8,
    "Name": "Laura Anderson",
    "Email": "laura.anderson@example.com",
    "PhoneNumber": "7778889999"
  },
  {
    "id": 9,
    "Name": "Matthew Clark",
    "Email": "matthew.clark@example.com",
    "PhoneNumber": "6665554444"
  },
  {
    "id": 10,
    "Name": "Olivia Taylor",
    "Email": "olivia.taylor@example.com",
    "PhoneNumber": "8887776666"
  },
  {
    "id": 11,
    "Name": "Robert Hall",
    "Email": "robert.hall@example.com",
    "PhoneNumber": "2223334444"
  },
  {
    "id": 12,
    "Name": "Sophia Martinez",
    "Email": "sophia.martinez@example.com",
    "PhoneNumber": "5557778888"
  },
  {
    "id": 13,
    "Name": "William Davis",
    "Email": "william.davis@example.com",
    "PhoneNumber": "7778889999"
  },
  {
    "id": 14,
    "Name": "Amanda Turner",
    "Email": "amanda.turner@example.com",
    "PhoneNumber": "1112223333"
  },
  {
    "id": 15,
    "Name": "Benjamin Brooks",
    "Email": "benjamin.brooks@example.com",
    "PhoneNumber": "4445556666"
  },
  {
    "id": 16,
    "Name": "Christine Scott",
    "Email": "christine.scott@example.com",
    "PhoneNumber": "7778889999"
  },
  {
    "id": 17,
    "Name": "Daniel Wright",
    "Email": "daniel.wright@example.com",
    "PhoneNumber": "5556667777"
  },
  {
    "id": 18,
    "Name": "Emma Harris",
    "Email": "emma.harris@example.com",
    "PhoneNumber": "3332221111"
  },
  {
    "id": 19,
    "Name": "Frank Jackson",
    "Email": "frank.jackson@example.com",
    "PhoneNumber": "7779998888"
  },
  {
    "id": 20,
    "Name": "Grace Turner",
    "Email": "grace.turner@example.com",
    "PhoneNumber": "5554443333"
  }
];

/* GET users listing. */
router.get('/dummy-data', async (req, res) => {
  try {
    res.send({
      statusCode: 200,
      data
    })
  } catch (error) {
    console.log(error);
    res.send({
      statusCode: 500,
      message: "Internal Server Error",
      error
    })
  }
});

module.exports = router;
