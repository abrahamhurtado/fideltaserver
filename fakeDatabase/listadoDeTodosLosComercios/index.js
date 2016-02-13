import express from 'express';
import faker from 'faker';
import getImage from '../../getImage'

var listadoDeComercios = [
  {
    BusinessId: faker.random.number(),
    Name: faker.company.companyName(),
    CategoryName: faker.company.bs(),
    Email: faker.internet.email(),
    Website: "http://facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: faker.random.uuid(),
    Description: faker.company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
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
      },
      {
        BranchID: 1,
        BranchName: faker.company.companyName(),
        BranchAddress: faker.address.streetAddress(),
        BranchPhone: faker.phone.phoneNumber(),
        BranchLat: faker.address.latitude(),
        BranchLng: faker.address.longitude()
      }
    ],
  },
  {
    BusinessId: faker.random.number(),
    Name: faker.company.companyName(),
    CategoryName: "Sin categoria",
    Email: faker.internet.email(),
    Website: faker.internet.domainName(),
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: faker.random.uuid(),
    Description: "No hay descripción disponible",
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
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
      },
      {
        BranchID: 1,
        BranchName: faker.company.companyName(),
        BranchAddress: faker.address.streetAddress(),
        BranchPhone: faker.phone.phoneNumber(),
        BranchLat: faker.address.latitude(),
        BranchLng: faker.address.longitude()
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
