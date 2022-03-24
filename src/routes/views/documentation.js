import react, {Component} from "react";
import {Div, Text, Link, Tag, Icon, Row, Col, Button} from 'atomize';
import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";



class Documentation extends Component{
    render(){
        return(
              <>
              <Nav />
                <Row minH="80vh">
                    <Col  size={{xs:"12", md:"8", lg:"2"}} textAlign="left" bg="gray100"  >
                        <Text textSize="title" tag="h2" m={{l: "2rem",t:"4rem"}}>Documentación</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>MIRV</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>¿Quienes Somos?</Text>
                        <Text textSize="subheader" m={{l:"3rem"}}>Proyectos</Text>
                    </Col>
                    <Col  size={{xs:"12", md:"8", lg:"8"}} bg="gray100">
                       <Row>
                            <Div p={"2rem"}rounded="xl" bg="white" m={{t:"2rem"}}>
                                <Text textSize="display1" tag="h1" m={{t:"2rem"}} >MIRV</Text>
                                <Text textSize="subheader" textColor="gray900"tag="h2" m={{b:"1rem"}} >Multimedia Interactiva y Realidad Virtual</Text>
                                
                                <Text textSize="paragraph" w="100%" m={{t:"1rem"}} textAlign="justify">Es un equipo de creativos digitales, dentro de la Vicerrectoría Académica, como patrte del aréa de inmnovación educativa, en el Tec de Monterrey, entre los que se encuentran Artistas digitales, Diseñadores y Desarrolladoress, que proponen, diseñan y desarrollan soluciones, experiencias y aplicaciones digitales educativas, para la comunidad Académica, porponemos soluciones basados en los temas que puedan aprovechar al máximo estas tecnologías, siempre buscamos desarrollar sobre las tecnologías de vanguardía.</Text>
                                <Div d={{xs:"flex-wrap", md:"flex", lg:"flex"}} m={{t:{xs:"2rem", md:"2rem", lg:"2rem"}}} >
                                    <Button bg="transparent" borderColor="black" hoverShadow="4"  m={{r:"1rem", b:"1rem"}} border="3px solid" textColor="black" suffix={<Icon name="LongRight"></Icon>}>Realidad Virtual</Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem"}} border="3px solid" textColor="black"  suffix={<Icon name="LongRight"></Icon>}>Realidad Aumentada</Button>
                                    <Button bg="transparent" borderColor="black" hoverShadow="4" m={{r:"1rem", b:"1rem",}} border="3px solid" textColor="black"  suffix={<Icon name="LongRight"></Icon>}>Realidad Mixta</Button>
                                </Div>
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
