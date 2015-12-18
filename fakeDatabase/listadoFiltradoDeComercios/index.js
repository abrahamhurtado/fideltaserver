import expres from 'express';
import faker from 'faker/locale/es_MX';

var Business = [
  {
    BusinessId: faker.random.number(),
    Name: faker.company.companyName(),
    CategoryName: faker.company.bs(),
    Email: faker.internet.email(),
    WebSite: faker.internet.url(),
    FacebookURL: faker.internet.url(),
    TwitterURL: faker.internet.url(),
    Code: faker.random.uuid(),
    Description: faker.company.catchPhrase(),
    WalletBonus: 0.10,
    InvitedBonus: 0.10,
    InviteBonus: 0.10,
    UserName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    BusinessImage: faker.image.business(),
    WithWallet: faker.random.boolean(),
    Branches: [
        {
          BranchID: 0,
          Branchname: faker.company.companyName(),
          Branchaddress: faker.address.streetAddress(),
          BranchPhone: faker.phone.phoneNumber(),
          BranchLat: faker.address.latitude(),
          BranchLng: faker.address.longitude()
        }
    ]
  }, {
    BusinessId: faker.random.number(),
    Name: faker.company.companyName(),
    CategoryName: faker.company.bs(),
    Email: faker.internet.email(),
    WebSite: faker.internet.url(),
    FacebookURL: faker.internet.url(),
    TwitterURL: faker.internet.url(),
    Code: faker.random.uuid(),
    Description: faker.company.catchPhrase(),
    WalletBonus: 0.10,
    InvitedBonus: 0.10,
    InviteBonus: 0.10,
    UserName: faker.internet.userName(),
    UserEmail: faker.internet.email(),
    Wallets: 0,
    BusinessImage: faker.image.business(),
    WithWallet: faker.random.boolean(),
    Branches: [
        {
          BranchID: 0,
          Branchname: faker.company.companyName(),
          Branchaddress: faker.address.streetAddress(),
          BranchPhone: faker.phone.phoneNumber(),
          BranchLat: faker.address.latitude(),
          BranchLng: faker.address.longitude()
        }
    ]
  }
];

const router = expres.Router();

router.get('/api/business/key/:keyword/user/:userCode', function (req, res) {
  res.json({
    Business
  });
});

export default router;
