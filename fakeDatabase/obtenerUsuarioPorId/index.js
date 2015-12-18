import express from 'express';
import faker from 'faker/locale/es_MX';

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

router.get('/api/user/id/:json', function (req, res) {
  var objetoRecibido = JSON.parse(req.params.json);
  res.json(miBaseDeUsuarios[objetoRecibido.id]);
});

export default router;
