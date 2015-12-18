import express from 'express';
import Faker from "Faker";

var miBaseDeUsuarios = {
  0: {
    Id: 0,
    Email: "arhc.hc@gmail.com",
    FirstName: Faker.Name.firstName(),
    LastName: "Hurtado",
    IsMan: true,
    ImageCode: "nomames.jpg",
    BirthDate: new Date(),
    Wallets: 0
  }
}

var datosComercio = {
  0: {
    BusinessId: 0,
    Name: "Fidelta",
    CategoryName: "Empresa de Lealtad",
    Email: "tujefa@gmail.com",
    Website: "http://www.facebook.com",
    FacebookURL: "Ninguno",
    TwitterURL: "Ninguno",
    Code: "Industria Inutil",
    Description: "No tenemos descripción de la cual justifica nuestras acciones",
    WalletBonus: 0,
    InvitedBonus: 0,
    UserName: "Fidelta",
    UserEmail: "fideltaios@gmail.com",
    Wallets: 0,
    BusinessImage: "tujefa",
    WithWallet: true,
    Branches: [
        {
          BranchID: 0,
          BranchName: "Sucursal Cancumpas",
          BranchAddress: "Desconocida",
          BranchPhone: "6621989837",
          BranchLat: 0,
          BranchLng: 0
        }
    ],
    WithWallet: true,
    WalletAmount: 0,
    UserCode: "0",
  }
}

var listaComercio = {
  0: {
    "Business": [
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
        Branches: "Ninguna otra sucursal",
      }
    ],
    "UserCode": "0"
  }
}


express()
  .set('json spaces', 2)
  .get('/', (req, res) => {
    res.status(200).send('Hola!')
  })
  .get('/api/user/id/:json', function (req, res) {
      var miObjeto = JSON.parse(req.params.json);
      res.json(miBaseDeUsuarios[miObjeto.id])
  })
  .get('/api/business/profile/business/:businessCode/user/:userCode', function (req, res){
      res.json(datosComercio[0])
  })
  .get('/api/business/user/:usuarioCode', function (req, res){
    res.json(listaComercio[0])
  })
  .listen(3000, (err) => {
    console.log('Escuchando en el puerto 3000 :)')
  })
