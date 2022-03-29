import {Component} from "react";
import {Tag, Col, Row, Div, Text, Anchor, Dropdown} from 'atomize';
import  "@google/model-viewer";
import  "../css/Tools.css";


const DownOp = (
    <Div>
        {[ "Descargar Glb", "Descargar USDZ", "Descargar Fbx"].map((name, index)=>(
            <Anchor d="block" p={{x:"1rem", y:"0.25rem"}} key={index}>
                {name}
            </Anchor>
        ))}
    </Div>
)

class GoogleViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showDropdown: false,
        };
      }

      expand(){
        this.document.getElementById("full").classList.add('expand-screen');
      }
      

    render() {
        const { showDropdown } = this.state;

        return (
            <>
            
             <Row >
                <Col m={{xs:{l:"3rem"}}}>
                    <model-viewer ar ar-scale="fixed" camera-controls auto-rotate alt="modelos 3D" id="reveal" loading="eager"  src={this.props.url}  ios-src="./models/MBA.usdz" />
                </Col>
            </Row>
            <Row textAlign={{xs:"center", md:"left", lg:"left"}} justify={{xs:"center", md:"left", lg:"left"}} >
              <Col size={{xs:"12", md:"8", lg:"8"}}>
                  <Text textSize={{xs:"display1", md:"display", lg:"display1"}} >Título del objeto</Text>
                  <Tag m={{t:"1rem", r: "1rem", b:"1rem"}}>Sin animación</Tag>
              </Col>
              <Col size={{xs:"6", md:"4", lg:"4"}} m={{xs:{b:"2rem"}}}>
                <Dropdown 
                  m={{b:"1.5rem", t:".5rem"}}
                  textColor="info800"
                  borderColor="info800"
                  isOpen={showDropdown}
                  onClick={() =>
                  this.setState({ showDropdown: !showDropdown })
                  }
                  menu={DownOp}
                  >
                  Descargar
                </Dropdown>
              </Col>
            </Row>
            
            </>
        );
    }
}

export default GoogleViewer;
