# Server Fideltoso

## NECESITAS TENER NODE

Server con datos falsos y aleatorios modelados a partir de la documentación de la API fideltosa, con el propósito dar una interfaz homogénea para todas las peticiones de los proyectos fideltásticos.

Por el momento, sólo están disponibles los servicios que utilizan el protocolo ```GET```, los que son ```POST``` no tenemos pensados  hacerlos, es demasiado desmadre, sentimos, pero si hay suficiente demanda, se puede intentar.

No se preocupen por los argumentos/parámetros, manden los que sean y obtendrán datos. También, cada vez que reinicien el server, obtendrán datos diferentes, pero debería de servir.

## Instalación

```bash
git clone https://github.com/arhcstolen/fideltaserver.git

cd ./fideltaserver

npm install

npm start

# Ahora, vé a http://localhost:3000 y prueba la API :)
```

Estos son los servicios disponibles (chequen la docu para saber como hacer las peticiones :P):

- Obtener promociones disponibles para usuario

- Obtener promociones disponibles para usuario según ubicación

- Obtener invitaciones de usuario

- Obtener monederos de usuario

- Listado de todos los comercios

- Listado filtrado de comercios

- Datos de comercio

- Promociones de comercio

- Obtener puntos en monedero de usuario

- Obtener usuario por id
