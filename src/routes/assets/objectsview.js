import { Component } from "react";
import {  Div, Col, Row, Text, Button, Icon, Input } from "atomize";
import Card from '../../components/Card';
import Nav from '../../components/Navbar';
import SideView from '../../components/SideViewer';


class ObjectsView extends Component {
  render() {
    return (
      <>
        <Nav></Nav>
        <Row>
          <Col size="2">
            <Div m={{t:"9rem"}} p="2rem">
            <Input
              
              m={{b:"2rem"}}
                placeholder="Search"
                suffix={
                  <Button
                    pos="absolute"
                    onClick={() => console.log("clicked")}
                    bg="transparent"
                    hoverBg="info800"
                    w="3rem"
                    top="0"
                    right="0"
                    rounded={{ r: "md" }}
                  >
                    <Icon
                      name="Search"
                      size="20px"
                      color="gray"
                      cursor="pointer"
                    />
                  </Button>
                }
              />
             
            </Div>
          </Col>
          <Col size="6">
            <Row m={{ t: "4rem", b: "2rem" }}>
              <Text textSize="display1">Librería de recursos </Text>
            </Row>
            <Row>
              {[
                  "Asset1",
                  "Assets2",
                  "Asset3",
                  "Asset4",
                  "Asset5",
                  "Asset6",
                  "Assets7",
                  "Asset8",
                  "Asset9",
                  "Asset10",
                  "Asset11",
                  "Asset12",
                  "Asset13",
                ].map((name, index) => (
                  <Card name={name} />

                ))}
                <SideView></SideView>
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}

export default ObjectsView;
