import  {Component} from "react";
import { Anchor, Div, Row, Text} from "atomize";
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
                    <Div rounded="lg" bg="white"  align="center" justify="center" p={{x:"1rem", y:"2rem"}} m={{x:{xs:"2rem",lg:"3rem"}}} >
                        <Text textSize="title" tag="h1"> Nuestro equipo</Text>
                        <Text textSize="caption" textColor="gray900">Artistas digitales, Diseñadores y Programadores<br></br>Los personajes fueron creados dentro de <Anchor textColor="black600" textWeight="700">Ready player Me</Anchor> </Text>
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
