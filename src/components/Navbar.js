import React, {Component} from 'react';
import {Text, Row, Col, Icon, Div, Button, Collapse, Image, } from 'atomize';
import { Link } from 'react-router-dom';
import "../css/Nav.css";
import Logo from "../assets/logo.svg" 


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
                    <Col size={{xs:"12", md:"8", lg:"2"}} bg="transparent" justify="center" textAlign="center" align="center">
                        <Link to="/"><Image src={Logo} m={{y:"2.5rem"}} maxW="50%" ></Image></Link>
                    </Col>
                    <Col size={{xs:"12", md:"8", lg:"7"}} bg="transparent" align="center"> 
                        <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="mobilelist">
                                <Link to="/about">
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="caption"  p={{l:{xs:"1rem"},}} >Acerca</Text>
                                </Link>                
                                <Link to="/library">
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="caption"  p={{l:{xs:"2rem"},}} className="nav-item">Librería</Text>
                                </Link>
                                <Link to="/Documentation">
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="caption"  p={{l:{xs:"1rem"},}} >Proyectos</Text>
                                    </Link>
                                <Link to="/Team">
                                    <Text  m={{t:"3rem", r:"1rem"}} textSize="caption"  p={{l:{xs:"1rem"},}} >Equipo</Text>
                                </Link>

                                <Text  m={{t:"3rem", r:"1rem"}} textSize="caption"  p={{l:{xs:"1rem"},b:{xs:"4rem"}}} >Soporte</Text>
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
                    <Col size={{xs:"12", md:"4", lg:"3"}} bg="transparent" d="flex" justify="center">
                        <Button  m="2.5rem" className="nav-item" bg="transparent" textColor="black900" prefix={<Icon name="UserCircle" size="20px" color="black900" m=".2rem"/>} >Inicia Sesión</Button>
                        <Button  m="2.5rem" className="nav-item" bg="Transparent" textColor="black900" prefix={<Icon name="UserSolid" size="20px" color="black900" m=".2rem" />} >Registrar</Button>
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Nav;




