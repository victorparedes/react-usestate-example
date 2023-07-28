/* eslint-disable react/prop-types */
import { useState } from 'react'
import  Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const Ambiente = ({ambiente, initialState})=>{
    const [bombilla, setBombilla] = useState(initialState)
    
    // Este Log esta para que veas que se renderiza cuando en los estados
    // Ver en la consola que sucede cuando prendo/apago la luz de un ambiente
    console.log('Renderizando: ' + ambiente)
  
    return (
        <>
          <Col>{ambiente}</Col>
          <Col>{bombilla? "Encendida" : "Apagada"}</Col>
          <Col>
            <Button onClick={()=>setBombilla(!bombilla)} size='mg'>
              {bombilla? "Apagar" : "Encender"}
            </Button>
          </Col>
        </>
    )
  }

  export default Ambiente