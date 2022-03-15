import { Component } from "react";
import { Col, Row, Text} from "atomize";
import Card from '../../components/Card';
import Nav from '../../components/Navbar';
import Sidenav from "../../components/Sidenav";
import assets from '../../assets.json'
import Footer from "../../components/Footer";


class Library extends Component {

  render() {
    return (
      <>
        <Nav />
          <Row>
            <Col size={{xs:"12", md:"2", lg:"2"}}>
              <Sidenav />
            </Col>
            <Col size={{xs:"12", md:"6", lg:"6"}}>
              <Row justify={{xs:"center", md:"flex-start"}} m={{ t:{xs:"2rem", md:"4rem"}, b: "2rem" }} >
                
                <Text textSize="display1">Librería de recursos </Text>
              </Row>
              <Row justify={{xs:"center", md:"flex-start"}}>
              {assets.map((asset, index) => (
                  <Card name={asset.name} author={asset.author} />

                ))}
              </Row>
            </Col>
          </Row>
        <Footer />
      </>
    );
  }
}

export default Library;
