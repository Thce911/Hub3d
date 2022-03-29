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
                <Row d="flex-wrap" m={{b:".5rem"}} bg="gray200" h="100%" p="1rem">
                    <Div rounded="lg" bg="white"  align="center" justify="center" p="2rem">
                        <Text textSize="title" tag="h1"> Nuestro equipo</Text>
                        <Text>Artistas digitales, diseñadores y programadores</Text>
                    </Div>
                   
                    <Div justify="center" p={{b:"4rem"}} m={{b:"1rem"}} d="flex" flexDir="Row" flexWrap="wrap">
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
                    </Div>
                   
                </Row>
              <Footer />
              </>  
        )}
}

export default Team
