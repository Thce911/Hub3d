import React, {Component} from 'react';
import {Text, Row, Col, Icon, Div, Button, Collapse} from 'atomize';
import { Link } from 'react-router-dom';
import "../css/Nav.css";


class Nav extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          showCollapse: false
        };

    }

    render(){
        const {showCollapse } = this.state;

        return(
            <>
              <Row pos="relative" > 
                    <Col size={{xs:"12", md:"8", lg:"2"}} bg="gray300" justify="center" textAlign="center">
                       <Link to='/'><Text textSize="display1" tag="h1"  m="2rem">MirvHub</Text></Link> 
                    </Col>
                    <Col size={{xs:"12", md:"8", lg:"8"}} bg="gray300" > 
                        <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="mobilelist">
                                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"1rem"},}} >Acerca</Text>
                                <Link to="/library">  <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},}} className="nav-item">Librería</Text></Link>
                                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"1rem"},}} >Proyectos</Text>
                                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"1rem"},}} >Equipo</Text>
                                <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"1rem"},b:{xs:"4rem"}}} >Soporte</Text>
                            </Div>
                        <Div pos={{xs:"absolute", md:"relative", lg:"relative"}} top={{xs:"0"}} right={{xs:"0"}} m={{t:{xs:"2rem"}}} className="menu-btn">
                            <Button
                                h="2.5rem"
                                w="2.5rem"
                                bg="gray300"
                                hoverBg="gray400"
                                rounded="lg"
                                m={{ r: "1rem" }}
                                onClick={() => this.setState({ showCollapse: !showCollapse })}
                            >
                                <Icon name="Menu" size="20px"/>
                            </Button>
                        </Div>
                            
                        
                            <Collapse isOpen={showCollapse} >
                                <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="navlist">
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},}} >Acerca</Text>
                                    <Link to="/library">  <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},}} className="nav-item">Librería</Text></Link>
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},}} >Proyectos</Text>
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},}} >Equipo</Text>
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="display" tag="h1" p={{l:{xs:"2rem"},b:{xs:"4rem"}}} >Soporte</Text>
                                </Div>
                             </Collapse>
                    </Col>
                    <Col size={{xs:"12", md:"4", lg:"2"}} bg="gray400">
                        <Text  m="3rem" className="nav-item" >Iniciar Sesión / Registrate</Text>
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Nav;




