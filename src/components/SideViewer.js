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
          pos="fixed"
          right="0"
          m={{ r: {xs:"3rem",md:"2rem",lg:"2rem"}, l:{xs:"2rem", md:"2rem", lg:"2rem"} }}
          onClick={onClose}
        >
          <Icon name="Cross" size="20px" color="danger700" />
        </Button>
        </Div>
      </Row>
      <Row>
      <model-viewer ar ar-scale="fixed" camera-controls auto-rotate alt="modelos 3D" id="reveal" loading="eager"  src="./models/coca.glb"  ios-src="./models/MBA.usdz" />
      </Row>
      <Row>
        <Div m="2rem">
          <Text textSize="title">Nombre del Objeto</Text>
          <Text textSize="subheader">Nombre del autor</Text>
        </Div>
      </Row>
        <Text m={{l:"2rem"}} textSize="subheader">Información sobre el recurso</Text>
      <Row>
        <Div m="2rem" d="flex" rounded="xl">
          <Col size="6" bg="gray200" >
              <Text m=".5rem" textWeight="600">Nombre</Text>
              <Text m=".5rem" textWeight="600">Author</Text>
              <Text m=".5rem" textWeight="600">Tipo</Text>
              <Text m=".5rem" textWeight="600">Solicitante</Text>
              <Text m=".5rem" textWeight="600">Materias</Text>
          </Col>
          <Col size="6" >
              <Text   m=".5rem" textSize="caption">p008_Dioxido_de_Carbono</Text>
              <Text   m=".5rem" textSize="caption">Diego</Text>
              <Text   m=".5rem" textSize="caption">AssetBundle</Text>
              <Text   m=".5rem" textSize="caption">Profesor X</Text>
              <Text   m=".5rem" textSize="caption">Materia001, Materia002, Materia003</Text>
          </Col>  
        </Div>
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
