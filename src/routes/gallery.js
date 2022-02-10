/* eslint-disable no-unused-expressions */
import { React, Component } from "react";
import { Text, Icon, Div, Container, Button, Row, Col, Input } from "atomize";
import {} from "atomize";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Link } from "react-router-dom";

let scene, camera, renderer, controls, mixer, action;
let toggle = false;

const clock = new THREE.Clock();

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  init() {
    //creating scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    //add camera
    camera = new THREE.PerspectiveCamera(
      100,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );

    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(0, 1, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 1, 0);
    scene.add(dirLight);

    // grid
    const gridHelper = new THREE.GridHelper(30, 30, 0x303030, 0x303030);
    scene.add(gridHelper);

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);


    //Loader of the glb object
    const loader = new GLTFLoader();

		loader.load(
      // resource URL
      'models/coca.glb',
      // called when the resource is loaded
      function ( gltf ) {
        gltf.scene.position.set(0,1,0);
        gltf.scene.scale.set(10,10,10);
        scene.add( gltf.scene );
    
        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object
        
      },
      // called while loading is progressing
      function ( xhr ) {
    
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
      },
      // called when loading has errors
      function ( error ) {
    
        console.log( 'An error happened' );
    
      }
    );
    camera.position.set(2, 18, 28);
    
    //Setup OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(1, 1, 1);
    controls.update();

    return renderer.domElement;
  }

  //animation
  animate() {
    requestAnimationFrame(this.animate);
    const delta = clock.getDelta();
    if (mixer) mixer.update(delta);
    renderer.render(scene, camera);
  }

  componentDidMount() {
    document.getElementById("Render").appendChild(this.init());
    this.animate();
  }

  animateCtrl() {
    toggle = !toggle;
    if (toggle === true) {
      action.stop();
    } else {
      action.play();
    }
  }

  render() {
    return (
      <>
        <Container d="inline-block" align="center">
          <Row>
            <Div d="flex" >
              <Text textSize="display1" m="1rem">
                HUB3D
              </Text>
              <Input
                w="100vh"
                m="1rem"
                placeholder="Search"
                suffix={
                  <Button
                    pos="absolute"
                    onClick={() => console.log("clicked")}
                    bg="info700"
                    hoverBg="info800"
                    w="3rem"
                    top="0"
                    right="0"
                    rounded={{ r: "md" }}
                  >
                    <Icon
                      name="Search"
                      size="20px"
                      color="white"
                      cursor="pointer"
                    />
                  </Button>
                }
              />
              <Link to="/">
                <Button
                  h="2.5rem"
                  w="2.5rem"
                  bg="info300"
                  hoverBg="info400"
                  rounded="lg"
                  m="1rem"
                >
                  <Icon name="HomeSolid" size="20px" color="info700" />
                </Button>
              </Link>
              
            </Div>
          </Row>
          <Row>
            <Col size="4">
              <Text textSize="display1">GLTFLoader</Text>
              <Button
                h="2.5rem"
                w="2.5rem"
                bg="info700"
                hoverBg="info600"
                rounded="circle"
                m={{ r: "1rem" }}
                shadow="2"
                hoverShadow="4"
                align="center"
                onClick={this.animateCtrl.bind(this)}
              >
                <Icon name="Play" size="20px" color="white" />
              </Button>
            </Col>
            <Col size="8">
              <Div d="flex" id="Render"></Div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Gallery;