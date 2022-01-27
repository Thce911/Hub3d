import {React, Component} from 'react';
import { Text, Icon, Div, Container} from 'atomize';
import '../css/home.css';
import {Button} from 'atomize';
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {Link} from 'react-router-dom';


let scene, camera, renderer, controls, mixer, action;
let toggle = false;


const clock = new THREE.Clock();

class Home extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
  }

  init() {
    //creating scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);

    //add camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);

    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
    hemiLight.position.set( 0, 1, 0 );
    scene.add( hemiLight );

    const dirLight = new THREE.DirectionalLight( 0xffffff );
    dirLight.position.set( 0, 1, 0 );
    scene.add( dirLight );

    // grid
    const gridHelper = new THREE.GridHelper( 30, 30, 0x303030, 0x303030 );
    scene.add( gridHelper );

    //renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new FBXLoader();

    loader.load( "models/Samba.fbx", function (object) {
        mixer = new THREE.AnimationMixer( object );

        action = mixer.clipAction( object.animations[ 0 ] );
         action.play();

        object.traverse( function ( child ) {

            if ( child.isMesh ) {

                child.castShadow = true;
                child.receiveShadow = true;

            }
        });
        object.position.set(0,0,0);
        object.scale.set(.10,.10,.10);
        scene.add( object );
    } );
    

    //scene.add(cube);

    camera.position.set( 2, 18, 28 );


    controls = new OrbitControls( camera, renderer.domElement );
		controls.target.set( 1, 1, 1 );
		controls.update();

    return renderer.domElement;
  }

  //animation
  animate() {
    requestAnimationFrame(this.animate);
    const delta = clock.getDelta();
	if ( mixer ) mixer.update( delta );
    renderer.render(scene, camera);
  }

  componentDidMount() {
    document.getElementById("Render").appendChild(this.init());
    this.animate();
  }

  animateCtrl(){
      toggle = !toggle
      if(toggle === true){
        action.stop();
      }
      else{
          action.play();
      }
      
  }

  render() {
    return (
    <>
    <Container d="inline-block" align="center">
        <Text textSize="display2">HUB3D</Text>
        <Div d="flex" align="center" className="Controls"> 
            <Link to="/">
                <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg="info300"
                    hoverBg="info400"
                    rounded="lg"
                    m={{ r: "1rem" }}
                >
                    <Icon name="HomeSolid" size="20px" color="info700" />
                </Button>
           </Link>

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
        </Div>    
    </Container>
    <Div d="flex" id="Render">
    </Div>
    </>
    );
  }
}

export default Home;