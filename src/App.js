import './css/App.css';
import {Div, Text, Row, Col, Container} from 'atomize';

import Nav from './components/Navbar';
import Footer from './components/Footer';


function App() {
  
  return (
    <>
      <Nav />
        <Row>
          <Div d="flex" w="100%">
              <Div d="flex" bg="info200" align="center" flexDir="column" w="100%" h="400px" > 
              <Text textSize="display1" m={{t:"16rem"}} tag="h2">Bienvenido a MIRVHUB</Text>
              <Text> Un espacio para estudiantes, profesores y colaboradores del Tec de Monterrey</Text>
              </Div>
          </Div>
        </Row>
        <Row>
          <Col size="4" bg="info100" textAlign="center" h="300px" align="center"> <Text>Diseño y Modelación 3D</Text></Col>
          <Col size="4" bg="info200" textAlign="center"> <Text>Realidad Virtual </Text></Col>
          <Col size="4" bg="info300" textAlign="center"> <Text>Realidad Aumentada</Text></Col>
        </Row>
      <Footer />
    </>
  );
}

export default App;
