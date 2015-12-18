import express from 'express';
import faker from 'faker/locale/es_Mx';

var Transactions = [
  {
    Id: faker.random.number(),
    Email: faker.internet.email(),
    BusinessCode: faker.random.uuid(),
    OrderId: faker.random.number().toString(),
    Amount: 0.10
  }, {
    Id: faker.random.number(),
    Email: faker.internet.email(),
    BusinessCode: faker.random.uuid(),
    OrderId: faker.random.number().toString(),
    Amount: 0.10
  }
];

const router = express.Router();

router.get('/api/get-transactions/business/:businessCode', function (req, res) {
  res.json({Transactions});
});

export default router;
