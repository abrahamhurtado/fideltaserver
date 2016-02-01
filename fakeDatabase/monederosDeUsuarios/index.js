import express from 'express';
import faker from 'faker';

var Wallets = [
  {
    WalletId: faker.random.number(),
    Amount: 0.10,
    Number: faker.random.number(),
    UserId: faker.random.number(),
    UserCode: faker.random.uuid(),
    BusinessId: faker.random.number(),
    BusinessCode: faker.random.uuid(),
    BusinessName: faker.company.companyName()
  }, {
    WalletId: faker.random.number(),
    Amount: 0.10,
    Number: faker.random.number(),
    UserId: faker.random.number(),
    UserCode: faker.random.uuid(),
    BusinessId: faker.random.number(),
    BusinessCode: faker.random.uuid(),
    BusinessName: faker.company.companyName()
  }, {
    WalletId: faker.random.number(),
    Amount: 0.10,
    Number: faker.random.number(),
    UserId: faker.random.number(),
    UserCode: faker.random.uuid(),
    BusinessId: faker.random.number(),
    BusinessCode: faker.random.uuid(),
    BusinessName: faker.company.companyName()
  }
]

const router = express.Router();

router.get('/api/wallets/user/:usuarioCode', function (req, res) {
  res.json({
    Wallets,
    UserCode: faker.random.uuid()
  })
});

export default router;
