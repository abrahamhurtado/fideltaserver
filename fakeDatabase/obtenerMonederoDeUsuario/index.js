import express from 'express';
import faker from 'faker';

var Wallet = {
  WalletId: faker.random.number(),
  Amount: 0.10,
  Number: faker.random.number(),
  UserId: faker.random.number(),
  UserCode: faker.random.uuid(),
  BusinessId: faker.random.number(),
  BusinessCode: faker.random.uuid(),
  BusinessName: faker.company.companyName()
}

const router = express.Router();

router.get('/api/wallets/getwallet/business/:comercioId/user/:usuarioCode', function (req, res) {
  res.json({
    Wallet,
    UserCode: Wallet.UserCode
  });
});

export default router;
