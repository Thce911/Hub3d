/* eslint-disable no-unused-expressions */
import { React, Component } from "react";
import {} from "atomize";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


let scene, camera, renderer, controls;



class Arview extends Component {
  constructor(props) {
    super(props);
  }

  init() {
    const container = document.createElement( 'div' );
		document.body.appendChild( container );
    //creating scene
    scene = new THREE.Scene();
    this.scene.add( new THREE.HemisphereLight( 0x606060, 0x404040 ) );
    const light = new THREE.DirectionalLight( 0xffffff );
        light.position.set( 1, 1, 1 ).normalize();
		this.scene.add( light );
			
		this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( window.innerWidth, window.innerHeight );
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        
		container.appendChild( this.renderer.domElement );
        
    this.controls = new OrbitControls( this.camera, this.renderer.domElement );
    this.controls.target.set(0, 3.5, 0);
    this.controls.update();
    
    
    this.initScene();
    this.setupXR();
    
    window.addEventListener('resize', this.resize.bind(this) );


    return renderer.domElement;
  }

  initScene(){
    this.geometry = new THREE.BoxBufferGeometry( 0.06, 0.06, 0.06 ); 
    this.meshes = [];
  }

  setupXR(){
      
      this.renderer.setAnimationLoop( this.render.bind(this) );
  }

  resize(){
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize( window.innerWidth, window.innerHeight );  
  }
  

  render() {
    this.meshes.forEach( (mesh) => { mesh.rotateY( 0.01 ); });
    this.renderer.render( this.scene, this.camera );
    return (
      <>
        
      </>
    );
  }
}

export default Arview;