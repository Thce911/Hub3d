import { useEffect, useState, Component } from "react";
import { Col, Row, Text } from "atomize";
import Card from "../../components/Card";
import Nav from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import Footer from "../../components/Footer";
import { db, getImageUrl } from "../../firebase-config";
import { ref, onValue } from "firebase/database";
import { mapSeries } from "bluebird";

class Library extends Component {
  contructor(props) {
    this.state = {
      newState: {},
    };
  }

  UNSAFE_componentWillMount() {
    onValue(ref(db, "/assets"), (snapshot) => {
      let newState = { assets: [], images: [] };
      this.setState(newState);

      const data = snapshot.val();

      if (data !== null) {
        let newData = Object.entries(data);
        mapSeries(newData, async (asset) => {
          console.log(asset);
          //console.log(asset + "<- Assets");
          const image = await getImageUrl(asset[0], asset[1].imgext);
          newState.assets.push(asset);
          newState.images.push(image);
          return;
        }).then(() => {
          this.setState(newState);
          console.log(this.state);
          console.log('algo');
        });
          //Object.values(data).map((assets) => {
          //  setAssets((oldArray) => [...oldArray, resource]);
          //});
      }
    });
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
              d={{ xs: "flex", md: "flex", lg: "flex" }}
            >
              {this.state.assets.map((asset, index) => (
                  console.log(this.assets + "<- Assets"),
                    <Card
                      key={index}
                      name={asset[1].name}
                      author={asset[1].createdby}
                      img={this.state.images[index]}
                    />
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
