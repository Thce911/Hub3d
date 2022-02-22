import {Component} from 'react';
import {Text, Row, Col} from 'atomize';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
            <>
               <Row pos="relative">
                <Col size="10" d="flex" bg="gray200"> 
                <Link to='/'><Text  m="2rem" textSize="display1" tag="h1">MIRVHub</Text></Link>
                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1">Acerca</Text>
                <Link to="/library">  <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1">Librería</Text></Link>
                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1">Proyectos</Text>
                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1">Equipo</Text>
                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1">Soporte</Text>
                </Col>
                <Col size="2">
                <Text  m="3rem">User data</Text>
                </Col>
                </Row>
            </>
        )
    }
}

export default Nav;




