import express from 'express';
import faker from 'faker';

var miBaseDeUsuarios = {
  0: {
    Id: 0,
    Email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    IsMan: true,
    imageCode: faker.image.avatar(),
    Birthdate: faker.date.past(),
    Wallets: 0
  }
}

const router = express.Router();

router.get('/api/user/id/:id', function (req, res) {
  res.json(miBaseDeUsuarios[0]);
});

export default router;
