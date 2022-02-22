/* eslint-disable no-unused-expressions */
import { Component } from "react";
import * as THREE from "three";
import {Div, Row, Col} from 'atomize';
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
      100,
      window.innerWidth / window.innerHeight,
      2,
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
    camera.position.set(10, 10, 1);
    
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
        <Row>
            <Col size="2" >
                 <Div id="Render" w="350px" h="200px"></Div> 
            </Col>
        </Row>
         
         </>
    );
  }
}

export default AssetViewer;
