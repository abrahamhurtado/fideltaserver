import express from 'express';
import faker from 'faker';

var InvitationsSend = [
  {
    BusinessName: faker.company.companyName(),
    Email: faker.internet.email(),
    SenderId: faker.random.number(),
    SenderEmail: faker.internet.email(),
    Code: faker.random.uuid(),
    SenderName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    ActivationDate: faker.date.past().toString()
  }, {
    BusinessName: faker.company.companyName(),
    Email: faker.internet.email(),
    SenderId: faker.random.number(),
    SenderEmail: faker.internet.email(),
    Code: faker.random.uuid(),
    SenderName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    ActivationDate: faker.date.past().toString()
  }
];

var InvitationsReceived = [
  {
    BusinessName: faker.company.companyName(),
    Email: faker.internet.email(),
    SenderId: faker.random.number(),
    SenderEmail: faker.internet.email(),
    Code: faker.random.uuid(),
    SenderName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    ActivationDate: faker.date.past().toString()
  }, {
    BusinessName: faker.company.companyName(),
    Email: faker.internet.email(),
    SenderId: faker.random.number(),
    SenderEmail: faker.internet.email(),
    Code: faker.random.uuid(),
    SenderName: `${faker.name.firstName()} ${faker.name.lastName()}`,
    ActivationDate: faker.date.past().toString()
  }
];

const router = express.Router();

router.get('/api/invitations/user/:usuarioCode', function (req, res) {
  res.json({
    InvitationsReceived,
    InvitationsSend,
    UserCode: req.params.usuarioCode
  })
});

export default router;
