import React, { Component,  } from "react";
import { SideDrawer, Button, Icon, Div } from "atomize";
import GoogleViewer from "./GoogleViewer";

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "27rem", md: "40rem" }}>
      <Div pos={{xs:"absolute", md:"absolute", lg:"absolute"}} top={{xs:"0"}} right={{xs:"0"}} flexDir={{xs:"column"}} m={{t:{xs:"2rem"}, r:{xs:"2rem"}}}>
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg="danger300"
                  hoverBg="danger400"
                  rounded="lg"
                  m={{ r: "1rem" }}
                  onClick={onClose}
                >
                  <Icon name="Cross" size="20px" color="danger700" />
                </Button>
          </Div>
    <GoogleViewer />
    </SideDrawer>
  );
};

class SideView extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        >
        </BasicSideDrawer>
        
      </>
    );
  }
}



export default SideView;
