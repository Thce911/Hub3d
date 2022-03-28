import react, {Component} from "react";
import { Col, Container, Div, Row, Text, Image } from "atomize";
import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";
import workers from '../../worker.json'
import TeamCard from "../../components/teamCard";




class Team extends Component{
    render(){
        return(
              <>
              <Nav />
                <Row d="flex-wrap" m="2rem" bg="gray200" h="100vh" p="2rem">
                    <Div rounded="lg" bg="white"  align="center" justify="center" p="2rem">
                        <Text textSize="title" tag="h1"> Nuestro equipo</Text>
                        <Text>Artistas digitales, diseñadores y programadores</Text>
                    </Div>
                   
                    <Row justify="center">
                        {workers.map((worker, index) =>(

                            <>
                              <TeamCard 
                                  index={index}
                                  name={worker.name}
                                  role={worker.role}
                                  profile={worker.profile}
                                  />
                                  
                            </>
                        ))}
                    </Row>
                   
                </Row>
              <Footer />
              </>  
        )}
}

export default Team
