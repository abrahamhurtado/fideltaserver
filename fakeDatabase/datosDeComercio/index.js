import express from 'express';
import faker from 'faker/locale/es_MX';

var datosComercio = {
  0: {
    BusinessId: faker.random.number(),
    name: faker.company.companyName(),
    Categoryname: faker.company.bs(),
    Email: faker.internet.email(),
    Website: "http://www.facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: "Industria Inutil",
    Description: faker.company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    userName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    Businessimage: faker.image.business(),
    WithWallet: true,
    Branches: [
        {
          BranchID: 0,
          Branchname: faker.company.companyName(),
          Branchaddress: faker.address.streetAddress(),
          BranchPhone: faker.phone.phoneNumber(),
          BranchLat: faker.address.latitude(),
          BranchLng: faker.address.longitude()
        }
    ],
    WithWallet: true,
    WalletAmount: 0,
    UserCode: "0",
  }
}

const router = express.Router();

router.get('/api/business/profile/business/:businessCode/user/:userCode', function (req, res) {
  res.json(datosComercio[0])
});

export default router;
