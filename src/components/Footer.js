import { Component } from "react";
import {Row, Text } from "atomize";
import '../css/Tools.css';

class Footer extends Component{
    render(){
        return(
            <>
             <Row minW="100%" bg="info700" justify="center" textAlign="center" pos="fixed" bottom="0" h="80px" align="center" >
                 
                 <Text textColor="white" textSize={{xs:"tiny", md:"caption", lg:"display"}} tag="h1" >INSTITUTO TECNOLÓGICO Y DE ESTUDIOS SUPERIORES DE MONTERREY <br></br> <b> 🇲🇽 MÉXICO. 2022</b></Text>
             </Row>


            </>
        );
    }
}

export default Footer