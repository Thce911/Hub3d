import { Component, useEffect } from "react";
import { Col, Row, Text } from "atomize";
import Nav from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import FirebaseData from "../../components/firebase-methods";
import  {Spiner}  from "../../components/Spiner";

class Library extends Component {
  contructor(props) {
    this.state = {
      loading: true,
    };
  }

  render() {

    return (
      <>
        <Nav />
        <Row>
          <Col size={{ xs: "12", md: "2", lg: "2" }}>
            <Sidenav />
          </Col>
          <Col size={{ xs: "12", md: "6", lg: "10" }}>
            <Row
              justify={{ xs: "center", md: "flex-start" }}
              m={{ t: { xs: "2rem", md: "4rem" }, b: "2rem" }}
            >
              <Text textSize="display1">Librería de recursos </Text>
            </Row>
            <Row
              justify={{ xs: "center", md: "flex-start", lg: "flex-start" }}
              d={{ xs: "flex", md: "flex", lg: "flex" }} p={{b:"6rem"}}
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
