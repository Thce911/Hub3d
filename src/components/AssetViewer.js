/* eslint-disable no-unused-expressions */
import { Component } from "react";
import * as THREE from "three";
import {Div, Row, Col, Tag, Text} from 'atomize';

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

let scene, camera, renderer, controls, mixer, action;
let toggle = false;
const clock = new THREE.Clock();

class AssetViewer extends Component {
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
      45,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    //Light configuration
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
    hemiLight.position.set(1, 2, 1);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(1, 2, 1);
    scene.add(dirLight);

    // grid
    const gridHelper = new THREE.GridHelper(20, 20, 0x303030, 0x303030);
    scene.add(gridHelper);

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(900, 500);
    document.body.appendChild(renderer.domElement);


    //Loader of the glb object
    const loader = new GLTFLoader();

		loader.load(
      // resource URL
      '../models/coca.glb',
      // called when the resource is loaded
      function ( gltf ) {
        gltf.scene.position.set(0,2,0);
        gltf.scene.scale.set(20,20,20);
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

    //Camera function setup
    camera.position.set(10, 5, 5);
    
    //Setup OrbitControls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(1, 0, 0);
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
        <Row >
            <Col>
                <Div maxW="100%" maxH="600px" id="Render">
                </Div> 
            </Col>
        </Row>
        <Row>
            <Col>
              <Div m={{t:"1rem", b:"2rem"}}>
                <Text textSize="tiny" > Assets/CienciasSociales/</Text>
                <Tag m={{t:"1rem", r: "1rem"}}>Ciencia</Tag>
                <Tag m={{t:"1rem", r: "1rem"}}>Partículas</Tag>
                <Tag m={{t:"1rem", r: "1rem"}}>Modelos 3D</Tag>
              </Div>
              <hr></hr>
              <Div>
                <Text textSize="heading" >Información del objeto</Text>
                <Tag m={{t:"1rem", r: "1rem", b:"1rem"}}>Sin animación</Tag>
                <Row m={{l:{xs:"rem"}}}>
                  <Col size="3" bg="gray200">
                    <Text>Nombre</Text>
                    <Text>Author</Text>
                    <Text>Tipo</Text>
                    <Text>Solicitante</Text>
                  </Col>
                  <Col size="9">
                    <Text>p008_Dioxido_de_Carbono</Text>
                    <Text>Diego</Text>
                    <Text>AssetBundle</Text>
                    <Text>Profesor X</Text>
                  </Col>  
                </Row>
                <hr></hr>
              </Div>
              
            </Col>
        </Row>
         
         </>
    );
  }
}

export default AssetViewer;
