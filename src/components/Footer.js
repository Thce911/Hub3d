import { Component } from "react";
import {Row, Col, Div, Text, } from "atomize";


class Footer extends Component{
    render(){
        return(
            <>
             <Row minW="100%" bg="info700" justify="center" textAlign="center" pos="fixed" bottom="0" h="80px" align="center">
                 <Text textColor="white" textSize="display" tag="h1">Todos los derechos reservados  | Tecnológico de Monterrey</Text>
             </Row>
            </>
        );
    }
}

export default Footer