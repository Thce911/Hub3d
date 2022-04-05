import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col, Div, Text, Image, Button, Tag} from "atomize";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import {FaSignOutAlt, FaCubes, FaRegIdBadge, FaRegFile, FaRegUserCircle, FaUsers, FaTasks } from 'react-icons/fa'

class Admin extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {}

  componentWillUpdate(nextProps, nextState) {}

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Nav />
            <Row>
                <Col size={{ xs: "12", md: "2", lg: "2" }} bg="info200" h="100vh">
                    <Div>
                    <Div rounded="lg" bg="white" w="1005" align="center" justify="center" m="2rem"  >
                        <Div textAlign="center" p={{y:"2rem"}} >
                            <Image  w="100px" h="100px" rounded="circle" src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fcoworkers%2FUnknown.png?alt=media&token=06932ce9-2467-4691-905f-3efcf59851bb" m={{y:".3rem"}} />
                            <Text  textSize="title" textWeight="600">
                                Administrador
                            </Text>
                            <Text textSize="caption"  textColor="gray800" textWeight="600">
                                Arquitecto@sistema.com
                            </Text>
                            <Button bg="transparent" border="1px solid" textColor="danger600" borderColor="danger600"  hoverTextColor="danger800" hoverBg="danger200" m={{x:"2rem", y:"1rem"}} h="2rem" prefix={<FaSignOutAlt style={{marginRight:".2rem"}}/>}> Cerrar sesión</Button>
                        </Div>
                    </Div> 
                    <Div rounded="lg" bg="white" w="1005"  justify="left" m="2rem" p="1rem">
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaRegUserCircle size={20} style={{marginRight:".5rem"}}/>}>Mi perfil</Button>
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaTasks size={20} style={{marginRight:".5rem"}}/>}>Secciones</Button>
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaCubes size={20} style={{marginRight:".5rem"}}/>}>Librería</Button>
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaUsers size={20} style={{marginRight:".5rem"}}/>}>Equipo</Button>
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaRegIdBadge size={20} style={{marginRight:".5rem"}}/>}>Proyectos</Button>
                        <Button bg="transparent" hoverTextColor="info500" textColor="black" m={{x:"1rem", y:"1rem"}} hoverBg="info100" h="2.5rem" prefix={<FaRegFile size={20} style={{marginRight:".5rem"}}/>}>Documentación</Button>
                    </Div> 
                                    </Div>
                </Col>
                <Col size={{ xs: "12", md: "6", lg: "10" }} bg="gray100" justify="center">
                   <Row justify="center">
                    <Div
                            rounded="lg"
                            bg="white"
                            align="center"
                            justify="center"
                            p={{ x: "1rem", y: "2rem" }}
                            m={{ x: { xs: "2rem", lg: "2rem"}, t:{xs:"1rem", lg:"2rem"}}}
                            w="90%"
                            >
                            <Text textSize="title" tag="h1">
                                {" "}
                                Panel de administrador
                            </Text>
                            <Text
                                textSize="caption"
                                textColor="gray900"
                                textAlign="justify"
                            >
                            En está sección podrás ver tus recursos favoritos,
                            exportar las experiencias y crear tu perfil para que sea visible en las colaboraciones.
                            </Text>
                        </Div>
                   </Row>
                   <Row p="2rem" justify="center" >
                        <Div rounded="lg" bg="white"w="180px" h="160px"  m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">152</Text>
                                <Text textSize="subheader" textColor="gray800">Recursos</Text>
                            </Div>
                        </Div>
                        <Div rounded="lg" bg="white"w="180px" h="160px" m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">26</Text>
                                <Text textSize="subheader" textColor="gray800">Proyectos</Text>
                            </Div>
                        </Div>
                        <Div rounded="lg" bg="white"w="180px" h="160px" m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">12</Text>
                                <Text textSize="subheader" textColor="gray800">Integrantes</Text>
                            </Div>
                        </Div>
                        <Div rounded="lg" bg="white"w="180px" h="160px"  m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">30</Text>
                                <Text textSize="subheader" textColor="gray800">Colaboradores</Text>
                            </Div>
                        </Div>
                        <Div rounded="lg" bg="white"w="180px" h="160px"  m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">20</Text>
                                <Text textSize="subheader" textColor="gray800">Experiencias</Text>
                            </Div>
                        </Div>
                        <Div rounded="lg" bg="white"w="180px" h="160px"  m={{x:"1.5rem", y:"1rem"}} p="1rem" textAlign="center">
                            <Div m="2rem">
                                <Text textSize="display2" textWeight="600">+1k</Text>
                                <Text textSize="subheader" textColor="gray800">Alumnos</Text>
                            </Div>
                        </Div>    
                   </Row>
                   <Row justify="center">
                      <Col size={{ xs: "12", md: "2", lg: "6" }} >
                        <Div m={{x:"6rem"}} bg="white" w="650px" h="400px" p="2rem" rounded="xl">
                            <Text textSize="title" m={{y:"1rem"}} textWeight="500">Recursos recientes</Text>
                            <Row bg="gray200" >
                                <Col>
                                    <Text textWeight="600" m={{t:"1rem"}}>Nombre</Text>
                                </Col>
                                <Col>
                                    <Text textWeight="600" m={{t:"1rem"}}>Autor</Text>
                                </Col>
                                <Col>
                                    <Text textWeight="600" m={{t:"1rem"}}>Tipo</Text>
                                </Col>
                                <Col>
                                    <Text textWeight="700" m={{t:"1rem"}}>AR</Text>
                                </Col>
                                <Col>
                                    <Text textWeight="700" m={{t:"1rem"}}>Extensiones</Text>
                                </Col>
                            </Row>
                            <Row m={{y:".5rem"}}>
                                <Col>
                                    <Text  >Asset 001</Text>
                                </Col>
                                <Col>
                                    <Text  >Diego elizalde</Text>
                                </Col>
                                <Col>
                                    <Text  >Recurso</Text>
                                </Col>
                                <Col>
                                    <Tag borderColor="success400" bg="success100" textColor="success800" border="1px solid" m={{l:".5rem", b:".5rem"}}>compatible</Tag>
                                </Col>
                                <Col>
                                    <Tag borderColor="gray400" textColor="dark400" borde="1px solid" m={{l:".5rem", b:".5rem"}}>.glb</Tag>
                                    <Tag borderColor="gray400" textColor="dark400" borde="1px solid" m={{l:".5rem", b:".5rem"}}>.fbx</Tag>
                                </Col>
                            </Row>
                        </Div>
                      </Col>
                      <Col size={{ xs: "12", md: "2", lg: "6" }}>
                        <Div m={{x:"1rem"}} bg="white" w="650px" h="400px" p="2rem">
                                <Text textSize="title" m={{y:"1rem"}} textWeight="500" rounded="xl">Últimos Proyectos</Text>
                                <Row bg="gray200" justify="center">
                                    <Col size={{xs:"12", md:"2", lg:"2"}}>
                                        <Text textWeight="600" m={{t:"1rem"}}>Nombre</Text>
                                    </Col>
                                    <Col size={{xs:"12", md:"2", lg:"2"}}>
                                        <Text textWeight="600" m={{t:"1rem"}}>Participantes</Text>
                                    </Col>
                                    <Col size={{xs:"12", md:"2", lg:"2"}}>
                                        <Text textWeight="600" m={{t:"1rem"}}>Tipo</Text>
                                    </Col>
                                    <Col size={{xs:"12", md:"2", lg:"2"}}>
                                        <Text textWeight="700" m={{t:"1rem"}}>Areás</Text>
                                    </Col>
                                    <Col size={{xs:"12", md:"2", lg:"2"}}>
                                        <Text textWeight="700" m={{t:"1rem"}}>Status</Text>
                                    </Col>
                                </Row>
                                <Row m={{y:".5rem"}}>
                                    <Col>
                                        <Text>Pensamiento ...    </Text>
                                    </Col>
                                    <Col>
                                        <Text  >Diego elizalde</Text>
                                    </Col>
                                    <Col>
                                        <Text  >Experiencia VR</Text>
                                    </Col>
                                    <Col>
                                        <Tag borderColor="gray400" textColor="dark400" borde="1px solid" m={{l:".5rem", b:".5rem"}}>DI</Tag>
                                        <Tag borderColor="gray400" textColor="dark400" borde="1px solid" m={{l:".5rem", b:".5rem"}}>DG</Tag>
                                    </Col>
                                    <Col>
                                        <Tag borderColor="success400" bg="success100" textColor="success800" border="1px solid" m={{l:".5rem", b:".5rem"}}>Completado</Tag>
                                    </Col>
                                </Row>
                            </Div>
                      </Col>
                   </Row>
                </Col>
            </Row>
        <Footer />
      </>
    );
  }
}

Admin.propTypes = {};

export default Admin;
