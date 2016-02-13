import express from 'express';
import faker from 'faker';
import getImage from '../../getImage'

let Promos = [
  {
    Id: faker.random.number(),
    Title: faker.lorem.sentence(),
    Description: faker.lorem.sentences(),
    Restriction: faker.lorem.sentences(),
    PromotionImage: getImage(),
    BusinessCode: faker.random.uuid(),
    BusinessImage: getImage(),
    PromotionAmount: "lolwut",
    Days: faker.date.future().toString()
  }, {
    Id: faker.random.number(),
    Title: faker.lorem.sentence(),
    Description: faker.lorem.sentences(),
    Restriction: faker.lorem.sentences(),
    PromotionImage: getImage(),
    BusinessCode: faker.random.uuid(),
    BusinessImage: getImage(),
    PromotionAmount: "lolwut",
    Days: faker.date.future().toString()
  }, {
      Id: faker.random.number(),
      Title: faker.lorem.sentence(),
      Description: faker.lorem.sentences(),
      Restriction: faker.lorem.sentences(),
      PromotionImage: getImage(),
      BusinessCode: faker.random.uuid(),
      BusinessImage: getImage(),
      PromotionAmount: "lolwut",
      Days: faker.date.future().toString()
  }
];

const router = express.Router();

router.get('/api/promos/user/:usuarioCode', function (req, res) {
  res.status(200).json({
    Promos,
    UserCode: faker.random.uuid()
  })
});

export default router;
