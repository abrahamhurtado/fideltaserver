import express from 'express';
import Faker from "Faker";

import obtenerUsuarioPorId from './fakeDatabase/obtenerUsuarioPorId/index';
import datosDeComercio from './fakeDatabase/datosDeComercio/index';
import listadoDeTodosLosComercios from './fakeDatabase/listadoDeTodosLosComercios/index';
import obtenerInvitacionesDeUsuario from './fakeDatabase/obtenerInvitacionesDeUsuario/index';
import obtenerTransaccionesPendientesDeUnComercio from './fakeDatabase/obtenerTransaccionesPendientesDeUnComercio/index';
import obtenerMonederoDeUsuario from './fakeDatabase/obtenerMonederoDeUsuario/index';


express()
  .set('json spaces', 2)
  .get('/', (req, res) => {
    res.status(200).send('Hola!')
  })
  .use(obtenerUsuarioPorId)
  .use(datosDeComercio)
  .use(listadoDeTodosLosComercios)
  .use(obtenerInvitacionesDeUsuario)
  .use(obtenerTransaccionesPendientesDeUnComercio)
  .use(obtenerMonederoDeUsuario)
  .listen(3000, (err) => {
    console.log('Escuchando en el puerto 3000 :)')
  })
