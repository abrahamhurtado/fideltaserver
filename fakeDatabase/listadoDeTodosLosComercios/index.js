import express from 'express';
import Faker from 'Faker';

var listadoDeComercios = [
  {
    BusinessId: Faker.random.number(),
    Name: Faker.Company.companyName(),
    CategoryName: Faker.Company.bs(),
    Email: Faker.Internet.email(),
    Website: "http://facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: "Industria Inutil",
    Description: Faker.Company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
    UserName: Faker.Internet.userName(),
    UserEmail: Faker.Internet.email(),
    Wallets: 0,
    BusinessImage: Faker.Image.imageUrl(),
    WithWallet: true,
    Branches: [
      {
        BranchID: 0,
        BranchName: Faker.Company.companyName(),
        BranchAddress: Faker.Address.streetAddress(),
        BranchPhone: Faker.PhoneNumber.phoneNumber(),
        BranchLat: Faker.Address.latitude(),
        BranchLng: Faker.Address.longitude()
      },
      {
        BranchID: 1,
        BranchName: Faker.Company.companyName(),
        BranchAddress: Faker.Address.streetAddress(),
        BranchPhone: Faker.PhoneNumber.phoneNumber(),
        BranchLat: Faker.Address.latitude(),
        BranchLng: Faker.Address.longitude()
      }
    ],
  },
  {
    BusinessId: Faker.random.number(),
    Name: Faker.Company.companyName(),
    CategoryName: "Sin categoria",
    Email: Faker.Internet.email(),
    Website: Faker.Internet.domainName(),
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: Faker.Helpers.randomNumber(),
    Description: "No hay descripción disponible",
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
    UserName: Faker.Internet.userName(),
    UserEmail: Faker.Internet.email(),
    Wallets: 0,
    BusinessImage: Faker.Image.imageUrl(),
    WithWallet: true,
    Branches: [
      {
        BranchID: 0,
        BranchName: Faker.Company.companyName(),
        BranchAddress: Faker.Address.streetAddress(),
        BranchPhone: Faker.PhoneNumber.phoneNumber(),
        BranchLat: Faker.Address.latitude(),
        BranchLng: Faker.Address.longitude()
      },
      {
        BranchID: 1,
        BranchName: Faker.Company.companyName(),
        BranchAddress: Faker.Address.streetAddress(),
        BranchPhone: Faker.PhoneNumber.phoneNumber(),
        BranchLat: Faker.Address.latitude(),
        BranchLng: Faker.Address.longitude()
      }
    ],
  }
]

const router = express.Router();

router.get('/api/business/user/:usuarioCode', function (req, res) {
  res.json({
    Business: listadoDeComercios,
    UserCode: req.params.usuarioCode
  })
});

export default router;
