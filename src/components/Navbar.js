import React, {Component} from 'react';
import {Text, Row, Col, Icon, Div, Button, Collapse, Image, } from 'atomize';
import { Link } from 'react-router-dom';
import "../css/Nav.css";
import Logo from "../assets/logo_og.png" 
import Login from '../routes/views/login';


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
              <Row align="center" bg="white" > 
                    <Col size={{xs:"12", md:"2", lg:"2"}} bg="transparent" justify="center" textAlign="center" >
                        <Link to="/"><Image src={Logo} maxW={{xs:"50%", md:"90", lg:"40%"}} m={{xs:"1rem", md:"1rem"}} ></Image></Link>
                    </Col>
                    <Col size={{xs:"12", md:"8", lg:"6"}} bg="transparent" > 
                            <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="mobilelist">
                                <Link className="navLinks"  to="/about" >
                                    <Text textWeight="500"  textSize="link" >Acerca</Text>
                                </Link>                
                                <Link className="navLinks"  to="/library">
                                    <Text textWeight="500"  textSize="link" >Librería</Text>
                                </Link>
                                <Link className="navLinks"  to="/Projects">
                                    <Text textWeight="500"  textSize="link" >Proyectos</Text>
                                    </Link>
                                <Link className="navLinks"  to="/Team">
                                    <Text textWeight="500"  textSize="link" >Equipo</Text>
                                </Link>
                                <Link className="navLinks"  to="/Documentation">
                                    <Text textWeight="500"  textSize="link" >Documentación</Text>

                                </Link>
                            </Div>
                    
                        <Div pos={{xs:"absolute", md:"relative", lg:"relative"}} top={{xs:"0"}} left={{xs:"0"}} m={{t:{xs:"2rem"}, l:{xs:"1.5rem"}}} className="menu-btn">
                            <Button
                                h="2.5rem"
                                w="2.5rem"
                                bg="gray300"
                                hoverBg="gray400"
                                rounded="lg"
                                m={{ x: "1rem" }}
                                onClick={() => this.setState({ showCollapse: !showCollapse })}
                            >
                                <Icon name="Menu" size="20px"/>
                            </Button>
                        </Div>
                            
                        
                        <Collapse isOpen={showCollapse} size={{xs:"12", md:"6", lg:"6"}} >
                            <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} className="navlist"  textAlign="center" bg="white">
                                <Link className="navLinks"  to="/about" >
                                    <Text textWeight="500"  textSize="link"    >Acerca</Text>
                                </Link>                
                                <Link className="navLinks"  to="/library">
                                    <Text textWeight="500"  textSize="link"   >Librería</Text>
                                </Link>
                                <Link className="navLinks"  to="/Projects">
                                    <Text textWeight="500"  textSize="link"    >Proyectos</Text>
                                    </Link>
                                <Link className="navLinks"  to="/Team">
                                    <Text textWeight="500"  textSize="link"    >Equipo</Text>
                                </Link>
                                <Link className="navLinks"  to="/Documentation">
                                    <Text textWeight="500"  textSize="link"   >Documentación</Text>
                                </Link>
                            </Div>
                        </Collapse>
                    </Col>
                    <Col size={{xs:"12", md:"4", lg:"4"}} bg="transparent" d="flex" justify="center">
                        <Login />
                    </Col>
                    
                </Row>
            </>
        )
    }
}

export default Nav;




