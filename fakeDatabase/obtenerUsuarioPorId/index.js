import express from 'express';
import Faker from 'faker';

var miBaseDeUsuarios = {
  0: {
    Id: 0,
    Email: Faker.Internet.email(),
    FirstName: Faker.Name.firstName(),
    LastName: Faker.Name.lastName(),
    IsMan: true,
    ImageCode: Faker.Image.avatar(),
    BirthDate: Faker.Date.past(),
    Wallets: 0
  }
}

const router = express.Router();

router.get('/api/user/id/:json', function (req, res) {
  var objetoRecibido = JSON.parse(req.params.json);
  res.json(miBaseDeUsuarios[objetoRecibido.id]);
});

export default router;
