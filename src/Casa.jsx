/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Ambiente from './Ambiente';

const Casa = ({ambientes})=>{

  // Este Log esta para que veas que se renderiza cuando en los estados
  // Ver en la consola que sucede cuando prendo/apago la luz de un ambiente
  console.log('Renderizando casa')

  return (
    <Container>
      <Row>
        <Col>Ambiente</Col>
        <Col>Luz</Col>
        <Col>Accion</Col>
      </Row>
      {
        ambientes.map((item) => {
          return (
            <Row key={item.lugar} >
              <Ambiente ambiente={item.lugar} initialState={item.estado} />  
            </Row>
          )
        })
      }
      </Container>
  )  
}

export default Casa
