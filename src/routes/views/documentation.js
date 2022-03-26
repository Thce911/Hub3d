import react, {Component} from "react";
import {Div, Text, Link, Tag, Icon, Row, Col, Button} from 'atomize';
import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";
import { BsBadgeVr, BsBadgeAr, } from "react-icons/bs";
import { FaMobileAlt, FaTabletAlt, FaLaptop, FaNode, FaNpm, FaReact, } from "react-icons/fa";
import {DiFirebase} from "react-icons/di"
import "../../css/documentation.css"





class Documentation extends Component{
    render(){
        return(
              <>
              <Nav />
                <Row minH="80vh">
                    <Col  size={{xs:"12", md:"8", lg:"4"}} textAlign="left" bg="gray100"  pos="fixed" h="100%" d={{xs:"none", md:"block", lg:"block"}}>
                        <Text textSize="title" tag="h2" m={{l: "2rem",t:"4rem"}}>Documentación</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Dependencias</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Repositorio</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Estilos y colores</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Iconos</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Modulos NPM</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Visualizadores</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Dispositivos compatibles</Text>
                    </Col>
                    <Col  size={{xs:"12", md:"8", lg:"10"}} bg="gray100">
                       <Row m={{l:"30%"}}>
                            <Div p={"2rem"}rounded="xl" bg="white" m={{t:{xs:".2rem",md:"1rem",lg:"2rem"}}} d="flex-wrap">
                                <Div justify="right" d="flex" align="center">
                                    <Text textSize="label"> Compatible:</Text>
                                    <FaMobileAlt size={'1.5rem'} className="icon" id="phone"/>
                                    <FaTabletAlt size={'1.5rem'} className="icon" id="tablet"/>
                                    <FaLaptop    size={'1.5rem'} className="icon" id="laptop"/>
                                </Div>
                                <Text textSize="display1" tag="h1" m={{t:"2rem"}} >MIRVHUB</Text>
                                <Text textSize="subheader" textColor="gray900"tag="h2" m={{b:"1rem"}} >HUB de recursos 3D del Tec de Monterrey</Text>
                                
                                <Text textSize="paragraph" w="100%" m={{t:"1rem"}} textAlign="justify">Es una plataforma creada a apartir de administrar los recursos generados como contenidos dentro de diversos cursos que forman parte de la curricula del Tec de Monterrey, así como un espacio en el cual profesores y alumnos pueden interactuar con recursos o incluso utilizarlos libremente como parte del contenido dentro de sus cursos.</Text>
                                <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} m={{t:{xs:"2rem", md:"2rem", lg:"2rem"}}} justify="left" >
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem"}} border="3px solid" textColor="black"  suffix={<Icon name="LongRight"></Icon>}>Solicitar Acceso</Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem",}} border="3px solid" textColor="black"  suffix={<Icon name="LongRight"></Icon>}>Conocer más</Button>
                                </Div>
                            </Div>
                            <Div p={"2rem"}rounded="xl" bg="white" m={{t:"2rem"}} d="flex-wrap" h="100vh">
                                <Text textSize="title" tag="h1" m={{t:"2rem"}} >Dependencias y recursos web</Text>
                                <Text textSize="subheader" textColor="gray900" m={{b:"1rem"}} >Sobre el desarrollo</Text>
                                <Text textSize="paragraph" w="100%" m={{t:"1rem"}} textAlign="justify">Esta librería esta basada en NodeJS, específicamente utiliza, REACTJS para su producción, todos los recursos e imágenes están alojadas dentro de Firebase, como parte de las funciones del MIRVHUB es que se puedan exportar y administrar los recursos vía nube, estamos muy emocionados de abrir está librería y escuchar que otras mejoras pueden ser implementadas.</Text>
                                <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} m={{t:{xs:"2rem", md:"2rem", lg:"2rem"}}} justify="center" >
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem"}} border="0px solid" textColor="black"  suffix={<FaNode  size={40}/>}></Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem",}} border="0px solid" textColor="black"  suffix={<FaNpm size={40}/>}></Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem",}} border="0px solid" textColor="black"  suffix={<FaReact size={40}/>}></Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem",}} border="0px solid" textColor="black"  suffix={<DiFirebase size={40}/>}></Button>
                                </Div>
                                <Text textSize="paragraph" w="100%" m={{t:"1rem"}} textAlign="justify">Para el uso de <BsBadgeAr size={20} alignmentBaseline="baseline"/> utilizamos una herramienta de Google llamada <b>Google Model viewer</b> con la cual, al observar los recursos en movil permite la exportacióndirecta con <b>ARCore</b> & <b>ARKit</b> que en algunos dispositivos es posible mirar los objetos a traves de la cámara. </Text>
                            </Div>
                            
                       </Row>

                       <Row>
                            
                       </Row>

                    </Col>
                    <Col bg="gray100" ize={{xs:"12", md:"8", lg:"2"}}>

                    </Col>
                </Row>
              <Footer />
              </>  
        )}
}

export default Documentation
