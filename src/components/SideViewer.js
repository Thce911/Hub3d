import { Component } from "react";
import { SideDrawer, Button } from "atomize";
import AssetViewer from "./AssetViewer";

const BasicSideDrawer = ({ isOpen, onClose }) => {
  return (
    <SideDrawer isOpen={isOpen} onClose={onClose} w={{ xs: "100vw", md: "60rem" }}>
     <AssetViewer></AssetViewer>
    </SideDrawer>
  );
};

class SideView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSideDrawer: false,
    };
  }

  render() {
    const { showSideDrawer } = this.state;
    return (
      <>
        <Button
          bg="info700"
          hoverBg="info600"
          m={{ r: "0.5rem" }}
          onClick={() => this.setState({ showSideDrawer: true })}
        >
          Show Basic Sidedrawer
        </Button>
        <BasicSideDrawer
          isOpen={showSideDrawer}
          onClose={() => this.setState({ showSideDrawer: false })}
        />
      </>
    );
  }
}

export default SideView;
