import express from 'express';
import Faker from 'Faker';

var datosComercio = {
  0: {
    BusinessId: Faker.random.number(),
    Name: Faker.Company.companyName(),
    CategoryName: Faker.Company.bs(),
    Email: Faker.Internet.email(),
    Website: "http://www.facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: "Industria Inutil",
    Description: Faker.Company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    UserName: Faker.Internet.userName(),
    UserEmail: Faker.Internet.email(),
    Wallets: 0,
    BusinessImage: Faker.Image.business(),
    WithWallet: true,
    Branches: [
        {
          BranchID: 0,
          BranchName: Faker.Company.companyName(),
          BranchAddress: Faker.Address.streetAddress(),
          BranchPhone: Faker.PhoneNumber.phoneNumber(),
          BranchLat: Faker.Address.latitude(),
          BranchLng: Faker.Address.longitude()
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
