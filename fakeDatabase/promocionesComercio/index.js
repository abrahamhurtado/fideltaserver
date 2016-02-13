import express from "express";
import faker from "faker"
import getImage from '../../getImage'

var promocionesUsuario =  {

  0:[{
    Id: faker.random.number(),
    Title: "Nada que ver aquí amigos",
    Description: faker.company.catchPhraseDescriptor(),
    Restriction: "No hay ninguna información al respecto",
    PromotionImage: getImage(),
    PromotionImageApp: faker.image.avatar(),
    BusinessName: faker.company.companyName(),
    BusinessCode: faker.random.uuid(),
    BusinessId: faker.random.number(),
    BusinessImage: getImage(),
    PromotionAmount: 0,
    Days: 0


  }],

1: [{
  Id: faker.random.number(),
  Title: "Nada que ver aquí amigos, otra vez",
  Description: faker.company.catchPhraseDescriptor(),
  Restriction: "No hay ninguna información al respecto",
  PromotionImage: getImage(),
  PromotionImageApp: faker.image.avatar(),
  BusinessName: faker.company.companyName(),
  BusinessCode: faker.random.uuid(),
  BusinessId: faker.random.number(),
  BusinessImage: getImage(),
  PromotionAmount: 0,
  Days: 0


}]

}

const router = express.Router();

router.get('/api/promos/business/:comercioCode', function (req, res) {
  res.json({Promos: promocionesUsuario[0]});
});

export default router;
