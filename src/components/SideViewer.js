import React, { Component,  } from "react";
import { SideDrawer, Button, Icon, Div, Row, Col, Text, Tag } from "atomize";
import  "@google/model-viewer";


const BasicSideDrawer = ({ isOpen, onClose }, props) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "27rem", md: "40rem" }} d="flex-wrap" >
      <Row>
        <Div d="flex" > 
          <Button
          classname="close-btn"
          h="2.5rem"
          w="2.5rem"
          bg="danger300"
          hoverBg="danger400"
          rounded="md"
          pos="absolute"
          right="0"
          m={{ r: {xs:"3rem",md:"2rem",lg:"2rem"}, l:{xs:"2rem", md:"2rem", lg:"2rem"} }}
          onClick={onClose}
        >
          <Icon name="Cross" size="20px" color="danger700" />
        </Button>
        
        </Div>
        <model-viewer ar ar-scale="fixed" camera-controls auto-rotate alt="modelos 3D" id="reveal" loading="eager"  src="./models/coca.glb"  ios-src="./models/MBA.usdz" />
      </Row>

      <Row>
      <Col size={{xs:"12", md:"8", lg:"8"}}>
                  <Text textSize={{xs:"display1", md:"display", lg:"display1"}} >{props.title}</Text>
                  <Tag m={{t:"1rem", r: "1rem", b:"1rem"}}>Sin animación</Tag>
              </Col>
      </Row>
      
      <Row>
        <Col size="4" bg="gray200">
            <Text>Nombre</Text>
            <Text>Author</Text>
            <Text>Tipo</Text>
            <Text>Solicitante</Text>
        </Col>
        <Col size="8">
            <Text>p008_Dioxido_de_Carbono</Text>
            <Text>Diego</Text>
            <Text>AssetBundle</Text>
            <Text>Profesor X</Text>
        </Col>  
      </Row>

    </SideDrawer>
  );
};

class SideView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      showSideDrawer: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show(){
    this.setState({ showSideDrawer: true});
  }

  hide(){
    this.setState({ showSideDrawer: false});
  }


  render() {
   
    const { showSideDrawer } = this.state;

    return (
      <>
        <Button
          h="2rem"
          w="2rem"
          bg="transparent"
          hoverBg="info400"
          rounded="lg"
          onClick={this.show}
        >
          <Icon name="Eye" size="20px" color="info500" />
        </Button>

        <BasicSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
          title={this.props.title}
        >
        </BasicSideDrawer>
        
      </>
    );
  }
}



export default SideView;
