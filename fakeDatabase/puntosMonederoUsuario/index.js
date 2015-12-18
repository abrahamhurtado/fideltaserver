import express from 'express';
import faker from 'faker/locale/es_MX';

var puntosMonederoUsuario =
{
  0:{
  Amount: faker.finance.amount(),
  UserCode: faker.random.uuid(),
  }
}

const router = express.Router();

router.get('/api/wallets/amount/business/:businessCode/user/:usuarioCode', function (req, res) {
  res.json({puntosMondero: puntosMonederoUsuario[0]});
});

export default router;
