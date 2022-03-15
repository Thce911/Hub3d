import {Component} from "react";
import {Tag, Col, Row, Div, Text} from 'atomize';
import { ModelViewerElement } from "@google/model-viewer";
import  "../css/Tools.css";

class GoogleViewer extends Component {
    render() {
        return (
            <>
             <Row >
                <Col>
                    <model-viewer ar ar-scale="fixed" camera-controls auto-rotate alt="A 3D model of an astronaut" id="reveal" loading="eager"  src="./models/coca.glb"  ios-src="./models/MBA.usdz" />
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

export default GoogleViewer;
