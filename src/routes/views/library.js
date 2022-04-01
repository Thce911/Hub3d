import { Component } from "react";
import { Col, Row, Text, Div } from "atomize";
import Nav from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import FirebaseData from "../../components/firebase-methods";

class Library extends Component {

  render() {

    return (
      <>
        <Nav />
        <Row >
          <Col size={{ xs: "12", md: "2", lg: "2" }}>
            <Sidenav />
          </Col>
          <Col size={{ xs: "12", md: "6", lg: "10" }}  bg="gray100" >
            <Row
              justify={{ xs: "center", md: "flex-start" }}
              m={{ t: { xs: "2rem", md: "4rem" }, b: "2rem" }}
            >
              <Div rounded="lg" bg="white"  align="center" justify="center" p={{x:"1rem", y:"2rem"}} m={{x:{xs:"1rem",lg:"1rem"}}} w="100%">
                        <Text textSize="title" tag="h1"> Biblioteca de recursos</Text>
                        <Text textSize="caption" textColor="gray900" textAlign="justify">Artistas digitales, Diseñadores y Programadores<br></br> han participado en el desarrollo de estos recursos y los puedes encontrar dentro de las experiencias y contenidos educativos del tec de Monterrey</Text>
                    </Div>
            </Row>
            <Row
             
              justify={{ xs: "center", md: "flex-start", lg: "flex-start" }}
              d={{ xs: "flex", md: "flex", lg: "flex" }} p={{b:"6rem", x:"1rem"}}
            >
              <FirebaseData />
            </Row>
          </Col>
        </Row>
        <Footer />
      </>
    );
  }
  }


export default Library;
