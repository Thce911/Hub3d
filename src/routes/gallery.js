/* eslint-disable no-unused-expressions */
import { Component } from "react";
import { ModelViewerElement } from "@google/model-viewer";


class Gallery extends Component {

  
  render() {
    return (
      <>
        <model-viewer ar ar-scale="fixed" camera-controls auto-rotate alt="A 3D model of an astronaut" id="reveal" loading="eager"  src="./models/coca.glb"  ios-src="./models/MBA.usdz" ></model-viewer>
      </>
    );
  }
}

export default Gallery;