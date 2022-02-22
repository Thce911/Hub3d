import './css/App.css';
import {useFirebaseApp} from 'reactfire'
import {Div, Text, Row, Col} from 'atomize';

import Nav from './components/Navbar';


function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <>
      <Nav></Nav>
      <Row>
        <Col size="12">
        <Div d="flex">
            <Div d="flex" bg="info200" align="center" flexDir="column" w="100%" h="400px" > 
            <Text textSize="display1" m={{t:"16rem"}} tag="h2">Bienvenido a MIRVHUB</Text>
            <Text> Un espacio para estudiantes, profesores y colaboradores del Tec de Monterrey</Text>
            </Div>
        </Div>
        </Col>
      </Row>
    </>
  );
}

export default App;
