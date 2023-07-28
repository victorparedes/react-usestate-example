# React + Vite + React Bootstrap

### Resumen 
Implementacion simple y explicada sobre el uso de [useState](https://react.dev/reference/react/useState) en dos componentes simples. 

Tenemos una casa inteligente a la cual necesitamos crear un panel de control web para poder realizar algunas acciones sobre la misma (por ejemplo, encender una luz).

Para probar el ejercicio deberas seguir estos pasos desde una consola de sistema:

```JS
// Clonamos el repo
git clone https://github.com/victorparedes/react-usestate-example.git

// instalamos las dependencias
npm install

// ejecutamos el proyecto en modo DEV
npm run dev
```

### Sobre los componentes

**Casa**: Es un [Container](https://react-bootstrap.github.io/docs/layout/grid) de *React Bootstrap* en donde se visualizaran los ambientes de una casa.

La lista de ambientes es pasada por medio de Props (https://react.dev/learn/passing-props-to-a-component) y en nuestra casa solo renderizamos ambientes.

El Container tendra una fila por cada ambiente que nosotros indiquemos en el file *dataMock.js* (probemos agregar alguno y probar que sucede)

***Ambiente***: Es un componente que tiene el estado de la luz (encendido y apagado) junto con un boton para cambiar el estado del mismo.

El ambiente tendra 3 elementos principales:
1. Una identificacion del nombre del ambiente.
2. El estado de la iluminacion (encendido/apagado)
3. Un boton interruptor para cambiar el estado de la iluminacion.

### Sobre el proyecto

Utilizaremos [Vite](https://vitejs.dev/) para no preocuparnos por la creacion  del proyecto inicial y concentrarnos en el uso de useState. Tambien usaremos [React Bootstrap](https://react-bootstrap.github.io/) para empezar a tener proyectos que sean visualmente mas agradables y nos motiven a continuar.

Tener en consideracion que este proyecto esta dirigido a principiantes que se estan aventurando en el desarrollo de software con lo cual esta pensado para ser simple y facil de entender.


Actividad 1: 

Agreguemos una nueva accion, tomando como ejemplo lo que ya hay, y agreguemos un boton para abrir o cerrar las ventanas.

Condiciones:
1. Abrir o cerrar las ventanas debera ser una accion independiente de encender/apagar la luz (debe ser un boton nuevo).
2. El nuevo interruptor (para las ventanas) puede estar en la misma columna donde esta el de la luz o en una nueva
3. Debera visualizarse los cambios en el estado Ventana cuando se pulse en el interruptor correspondiente (como asi tambien el estado inicial).