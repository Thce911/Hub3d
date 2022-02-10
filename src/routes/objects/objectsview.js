import{Component} from "react";
import {Container,Div,Col,Row,Text, Button, Icon} from "atomize";



class ObjectsView extends Component {

    



    render() {
        return (
            <Container d="inline-block">
                <Row>
                    <Col size="2">
                        <Text>Hello world</Text>
                    </Col>
                    <Col size="10" d="inline-block">

                        <Text>Container </Text>

                        {["Asset1", "Assets2", "Asset3", "Asset4","Asset5", "Asset6","Assets7","Asset8"].map((name, index)=>(
                            <Div maxW="300px" h="190px" bg="gray300" bgImg="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/img%2F-MZs05a6u3UoaoVqRpzS.jpg?alt=media&token=35604331-c127-4986-9796-0cd0213ee9fa" bgPos="center" bgSize="cover"  rounded="lg ">
                                <Div align="flex-end" m={{l:"85%", y:"1rem"}}> 
                                    <Button
                                        h="2.5rem"
                                        w="2.5rem"
                                        bg="transparent"
                                        hoverBg="danger400"
                                        rounded="lg"
                                    >
                                        <Icon name="Heart" size="20px" color="danger700" />
                                    </Button>

                                    <Button
                                        h="2.5rem"
                                        w="2.5rem"
                                        bg="transparent"
                                        hoverBg="info400"
                                        rounded="lg"
                                    >
                                        <Icon name="Download" size="20px" color="info500" />
                                    </Button>
                                </Div>
                                <Div  m={{l:"1rem", y:"2rem"}} >
                                    <Text textSize="subheader" m={{l:"1rem",r:"1rem" }} textColor="white">{name}</Text>
                                    <Text textSize="body" m={{l:"1rem",r:"1rem" }} textColor="gray500">Nombre del autor </Text>
                                </Div>
                            </Div>
                        ))}
                    </Col>
                </Row>
            </Container>
        );}

}

export default ObjectsView;
