import express from 'express';
import faker from 'faker';

var miBaseDeUsuarios = {
  0: {
    Id: 0,
    Email: faker.internet.email(),
    FirstName: faker.name.firstName(),
    LastName: faker.name.lastName(),
    IsMan: true,
    ImageCode: faker.image.avatar(),
    BirthDate: "1990-12-15",
    Wallets: 0
  }
}

const router = express.Router();

router.get('/api/user/id/:id', function (req, res) {
  res.json(miBaseDeUsuarios[0]);
});

export default router;
