import React, {Component} from 'react';
import {Text, Row, Col, Icon, Div, Button, Collapse, Image, } from 'atomize';
import { Link } from 'react-router-dom';
import "../css/Nav.css";
import Logo from "../assets/logo_og.png" 


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
              <Row pos="sticky" h="auto" > 
                    <Col size={{xs:"12", md:"8", lg:"2"}} bg="transparent" justify="center" textAlign="center" align="center">
                        <Link to="/"><Image src={Logo} m={{y:"2rem"}} maxW="40%" ></Image></Link>
                    </Col>
                    <Col size={{xs:"12", md:"8", lg:"6"}} bg="transparent" align="center"> 
                        <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="mobilelist">
                                <Link className="navLinks"  to="/about" >
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Acerca</Text>
                                </Link>                
                                <Link className="navLinks"  to="/library">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"2rem"},}} className="nav-item">Librería</Text>
                                </Link>
                                <Link className="navLinks"  to="/Projects">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Proyectos</Text>
                                    </Link>
                                <Link className="navLinks"  to="/Team">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Equipo</Text>
                                </Link>
                                <Link className="navLinks"  to="/Documentation">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},b:{xs:"4rem"}}} >Documentación</Text>

                                </Link>

                            </Div>
                        <Div pos={{xs:"absolute", md:"relative", lg:"relative"}} top={{xs:"0"}} left={{xs:"0"}} m={{t:{xs:"2.5rem"}, l:{xs:"1.5rem"}}} className="menu-btn">
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
                                <Link className="navLinks"  to="/about" >
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Acerca</Text>
                                </Link>                
                                <Link className="navLinks"  to="/library">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"2rem"},}} className="nav-item">Librería</Text>
                                </Link>
                                <Link className="navLinks"  to="/Projects">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Proyectos</Text>
                                    </Link>
                                <Link className="navLinks"  to="/Team">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},}} >Equipo</Text>
                                </Link>
                                <Link className="navLinks"  to="/Documentation">
                                    <Text textWeight="500"  m={{t:"3rem", r:"1rem"}} textSize="link"  p={{l:{xs:"1rem"},b:{xs:"4rem"}}} >Documentación</Text>

                                </Link>
                                </Div>
                             </Collapse>
                    </Col>
                    <Col size={{xs:"12", md:"4", lg:"4"}} bg="transparent" d="flex" justify="center">
                        <Button  m="2.5rem" className="nav-item" bg="transparent" textColor="black900" prefix={<Icon name="UserCircle" size="20px" color="black900" m=".2rem"/>} >Inicia Sesión</Button>
                        <Button  m="2.5rem" className="nav-item" bg="Transparent" textColor="black900" prefix={<Icon name="UserSolid" size="20px" color="black900" m=".2rem" />} >Registrar</Button>
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Nav;




