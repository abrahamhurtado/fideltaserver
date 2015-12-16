import express from 'express';

express()
  .get('/', (req, res) => {
    res.status(200).send('Hola!')
  })
  .listen(3000, (err) => {
    console.log('Escuchando en el puerto 3000 :)')
  })
