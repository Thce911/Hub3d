import react, {Component} from "react";
import {Div, Text, Link, Tag, Icon, Row, Col, Button, Image, Anchor} from 'atomize';
import Footer from "../../components/Footer";
import Nav from "../../components/Navbar";
import "../../css/documentation.css"
import ProjectCard from "../../components/PojectCard";
import { FaMobileAlt, FaTabletAlt, FaLaptop,FaUserAlt, FaUserFriends, FaGithub, FaExternalLinkAlt, FaVrCardboard} from "react-icons/fa";
import { BsBadgeVr, BsBadgeAr, } from "react-icons/bs";
import {GrAndroid, GrApple, GrChrome, GrFirefox, GrWindows } from "react-icons/gr";
import assets from "../../assets.json";

class Projects extends Component{

    componentDidMount(){

    }

    render(){
        return(
              <>
              <Nav />
                <Row justify="left" bg="gray200" h="100%"  p="1rem">
                    <Div rounded="lg" bg="white" w="100%" m={{x:{xs:".2rem", md:"2rem", lg:"8rem"}}} >
                       <Row >
                        <Col size={{xs:"12", md:"4", lg:"4" }} textAlign={{xs:"center", md:"left", lg:"left"}}>
                                <Div m={{l:{xs:"2rem",md:"12rem",lg:"3%"}, y:"2rem"}} justify={{xs:"center", md:"left", lg:"left"}}>
                                    <Text textSize="title" tag="h1" m={{y:".5rem", l:{xs:"0rem", md:"1rem", lg:"1rem"}}}>Proyectos hechos en MIRV</Text>
                                    <Text textSize="caption" textColor="gray900"  m={{y:".5rem",l:{xs:".2rem", md:"1rem", lg:"1rem"}}}>Estos son algunos de los proyectos en los que se han utlizado los recursos de nuestra librería.</Text>
                                </Div >
                            </Col>
                            <Col justify="right" d={{xs:"flex-wrap", md:"flex", lg:"flex"}} size={{xs:"12", md:"8", lg:"8" }} align="center">
                                    <Col justify="center" textAlign="center" size={{xs:"12", md:"4", lg:"2"}} >
                                    <Anchor textColor="dark"> <FaMobileAlt size={"1.8rem"}  id="phone" style={{padding:".3rem"}} /></Anchor>
                                    <Anchor textColor="dark"><FaTabletAlt size={"1.8rem"} id="tablet"  style={{padding:".3rem"}}/></Anchor>
                                    <Anchor textColor="dark"><FaLaptop size={"1.8rem"}  id="laptop" style={{padding:".3rem"}} /></Anchor>
                                    </Col>
                                    <Col justify="center" textAlign="center" size={{xs:"12", md:"4", lg:"2"}} align="center">
                                        <Anchor textColor="dark"><BsBadgeVr size={"2.5rem"}  id="VR"  style={{padding:".3rem"}}/></Anchor>
                                        <Anchor textColor="dark"><BsBadgeAr size={"2.5rem"}  id="AR" style={{padding:".3rem"}} /></Anchor>
                                    </Col>
                                    <Col justify="center" textAlign="center" size={{xs:"12", md:"4", lg:"2"}} align="center">
                                        <Anchor textColor="dark"><GrAndroid size={"1.8rem"} style={{padding:".3rem"}} /></Anchor>
                                        <Anchor textColor="dark"><GrApple size={"1.8rem"} style={{padding:".3rem"}} /></Anchor>
                                        <Anchor textColor="dark"><GrWindows size={"1.8rem"} style={{padding:".3rem"}} /></Anchor>
                                    </Col>
                            </Col>
                       </Row>
                    </Div>
                    </Row>
                   <Row d="flex" flexWrap="wrap" justify="center" m={{b:"6rem"}} bg="gray200">   
                    {assets.map((asset, index)=>(
                                <ProjectCard
                                index={asset.id}
                                title={asset.title} 
                                goal={asset.goal}
                                link={asset.link}
                                authors={asset.authors.length}
                                subtitle={asset.assign}
                                status={asset.status}
                                cover={asset.cover}
                                color={asset.color}
                                phone={asset.phone}
                                tablet={asset.tablet}
                                laptop={asset.laptop}
                                VR={asset.VR}
                                AR={asset.AR}
                                Andorid={asset.Android}
                                IOS={asset.IOS}
                                windows={asset.Windows}
                                />
                                
                            ))}
                   </Row>
                
              <Footer />
              </>  
        )}
}

export default Projects
