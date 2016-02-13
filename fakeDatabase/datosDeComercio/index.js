import express from 'express';
import faker from 'faker';
import getImage from '../../getImage'

var datosComercio = {
  0: {
    BusinessId: faker.random.number(),
    Name: faker.company.companyName(),
    CategoryName: faker.company.bs(),
    Email: faker.internet.email(),
    Website: "http://www.facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: faker.random.uuid(),
    Description: faker.company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    UserName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    BusinessImage: getImage(),
    WithWallet: true,
    Branches: [
        {
          BranchID: 0,
          BranchName: faker.company.companyName(),
          BranchAddress: faker.address.streetAddress(),
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
  res.status(200).json(datosComercio[0])
});

export default router;
