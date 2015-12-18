import express from 'express';
import faker from 'faker/locale/es_MX';

var listadoDeComercios = [
  {
    BusinessId: faker.random.number(),
    name: faker.company.companyName(),
    Categoryname: faker.company.bs(),
    Email: faker.internet.email(),
    Website: "http://facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: "Industria Inutil",
    Description: faker.company.catchPhrase(),
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
    userName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    Businessimage: faker.image.imageUrl(),
    WithWallet: true,
    Branches: [
      {
        BranchID: 0,
        Branchname: faker.company.companyName(),
        Branchaddress: faker.address.streetAddress(),
        BranchPhone: faker.phone.phoneNumber(),
        BranchLat: faker.address.latitude(),
        BranchLng: faker.address.longitude()
      },
      {
        BranchID: 1,
        Branchname: faker.company.companyName(),
        Branchaddress: faker.address.streetAddress(),
        BranchPhone: faker.phone.phoneNumber(),
        BranchLat: faker.address.latitude(),
        BranchLng: faker.address.longitude()
      }
    ],
  },
  {
    BusinessId: faker.random.number(),
    name: faker.company.companyName(),
    Categoryname: "Sin categoria",
    Email: faker.internet.email(),
    Website: faker.internet.domainName(),
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: faker.random.number(),
    Description: "No hay descripción disponible",
    WalletBonus: 0,
    InvitedBonus: 0,
    InviteBonus: 0,
    userName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    Businessimage: faker.image.imageUrl(),
    WithWallet: true,
    Branches: [
      {
        BranchID: 0,
        Branchname: faker.company.companyName(),
        Branchaddress: faker.address.streetAddress(),
        BranchPhone: faker.phone.phoneNumber(),
        BranchLat: faker.address.latitude(),
        BranchLng: faker.address.longitude()
      },
      {
        BranchID: 1,
        Branchname: faker.company.companyName(),
        Branchaddress: faker.address.streetAddress(),
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
