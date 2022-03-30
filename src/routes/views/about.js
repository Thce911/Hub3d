import  {Component} from "react";
import {Div, Text, Row, Col, Button, Anchor} from 'atomize';
import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";
import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import '../../css/about.css'
import { BsBadgeVr} from "react-icons/bs"; 


let scene, camera, renderer,  mixer, action;
let toggle = false;

const clock = new THREE.Clock();


class About extends Component{
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
          30,
          window.innerWidth/ window.innerHeight,
          1,
          2000
        );
    
        const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
        hemiLight.position.set(0, 1, 0);
        scene.add(hemiLight);
    
        const dirLight = new THREE.DirectionalLight(0xffffff);
        dirLight.position.set(1, 2, 1);
        scene.add(dirLight);
    
        // grid
        const gridHelper = new THREE.GridHelper(40, 10, 0x303030, 0x303030);
        scene.add(gridHelper);
    
        //renderer
        renderer = new THREE.WebGLRenderer();
        
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
        const loader = new FBXLoader();
    
        loader.load("models/Saludo.fbx", function (object) {
          mixer = new THREE.AnimationMixer(object);
    
          action = mixer.clipAction(object.animations[0]);
          action.play();
    
          object.traverse(function (child) {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });
          object.position.set(0, 0, 0);
          object.scale.set(0.1, 0.1, 0.1);
          scene.add(object);
        });
    
        //scene.add(cube);
    
        camera.position.set(0, 8, 60);
    
        //controls = new OrbitControls(camera, renderer.domElement);
        //controls.target.set(20, 0, );
        //controls.update();
    
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
    render(){
        return(
              <>
              <Nav />
                <Row  id="about-viewer" m={{b:{xs:"12rem", md:"4rem", lg:"2rem" }}} >
                   <Col size={{xs:"12", md:"6", lg:"6" }} id="Render">
                     <Div   >
                     </Div>
                  </Col>  
                  <Col size={{xs:"12", md:"6", lg:"6"}}  maxH="400px" >
                        <Div m={{ t:"1rem", l:{lg:"8rem"}}} p={{l:"2rem"}} rounded="xl" bg="white" >
                            <Text textSize="display1" tag="h1" m={{t:"4rem"}} >MIRV</Text>
                            <Text textSize="label" textColor="gray900" textWeight="600" m={{b:"1rem"}} >Multimedia Interactiva y Realidad Virtual</Text>
                            <Text textSize="paragraph" w="90%" m={{t:"1rem"}} textAlign="justify">Es un equipo de creativos digitales, dentro de la Vicerrectoría Académica, como patrte del aréa de inmnovación educativa, en el Tec de Monterrey. <br></br>Artistas digitales, Diseñadores y Desarrolladoress, que proponen, diseñan y desarrollan soluciones, experiencias digitales educativas, para la comunidad académica, proponemos soluciones sobre las tecnologías de vanguardía en educación.</Text>
                            
                            <Div d={{xs:"flex-wrap", md:"flex", g:"flex"}} m={{t:{xs:"1rem", md:"2rem", lg:"1rem"}}} >
                                <Anchor href="https://mirv.tec.mx/"><Button bg="transparent" borderColor="black" hoverShadow="4"  m={{r:"1rem", b:"1rem"}} border="3px solid" textColor="black" suffix={<BsBadgeVr size={25} style={{margin:".5rem"}}/>}>Recursos en </Button></Anchor>
                            </Div>
                            <Text textSize="tiny" w="90%" m={{t:"1rem"}} textAlign="justify"><i>**Ejemplo creado a partir de <a href="https://threejs.org/"> THREEJS</a> & <a href="https://www.mixamo.com/">Mixamo</a></i></Text>
                            
                        </Div>
                    </Col>
                  
                </Row>
              <Footer />
              </>  
        )}
}

export default About
