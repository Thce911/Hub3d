import {SideDrawer, Div, Text, Button, Icon, Image, Anchor, Tag, Row, Col} from 'atomize';
import { FaMobileAlt, FaTabletAlt, FaLaptop,FaUserAlt, FaUserFriends, FaGithub, FaExternalLinkAlt, FaVrCardboard} from "react-icons/fa";
import { BsBadgeVr, BsBadgeAr, } from "react-icons/bs";
import {GrAndroid, GrApple, GrChrome, GrFirefox, GrWindows } from "react-icons/gr";
import "../css/documentation.css"
 
const ProjectCard = (props) => (
<>
    <Div
        hoverShadow="4"
        p={"2rem"}
        rounded="xl"
        bg="white"
        m={{ t: "2rem", x:".5rem" }}
        d="flex-wrap"
        w={{ xs: "100%", md: "500px", lg: "500px" }}
        h={{ xs: "12%", md: "500px", lg: "700px" }}
        id="ProjectCard"
        >
        
        <Div d="flex" justify="right">
            <Tag
                bg={`${props.color}200`}
                borderColor={`${props.color}700`}
                textColor={`${props.color}700`}
                border="1px solid"
                p={{ x: "0.35rem", y: "0.15rem" }}
                m={{ b: "0.5rem" }}
                textSize="body"
                rounded="sm"
            >
                {props.status}
            </Tag>
        </Div>
        <Image src={props.cover} w="100%"  h="150px" p={{ y: ".2rem" }} rounded="md"></Image>
        
        <Div d={{xs:"flex", md:"flex", lg:"flex"}} justify="right">
          
        </Div>
        <Text
            textSize="heading"
            
            m={{ t: ".2rem" }}
            w={{ xs: "50%", md: "100%", lg: "100%" }}
        >
            {props.title}
        </Text>
        
        <Text
            textSize="paragraph"
            textColor="gray900"
            m={{ b: "1rem" }}
            w={{ xs: "90%", md: "100%", lg: "100%" }}
        >
            {props.subtitle}
        </Text>
        <Div
            d={{ xs: "flex", md: "flex", lg: "flex" }}
            justify="left"
            p={{ y: { xs: "2rem", md: "2rem", lg: ".2rem" } }}
        >
            <Anchor href="#">
            <Button
                bg="transparent"
                borderColor="dark"
                h="2rem"
                hoverShadow="4"
                border="0px solid"
                textColor="dark"
                m={{
                x: { xs: ".2rem", md: ".2rem", lg: ".1rem" },
                y: { xs: ".5rem", md: ".3rem", lg: ".3rem" },
                }}
                prefix={<FaUserFriends size={18} style={{ padding: ".2rem" }} />}
            >
                {props.authors}
            </Button>
            </Anchor>
            <Anchor href="#">
            <Button
                bg="transparent"
                borderColor="dark"
                h="2rem"
                hoverShadow="4"
                border="0px solid"
                textColor="dark"
                m={{
                x: { xs: ".2rem", md: ".2rem", lg: ".1rem" },
                y: { xs: ".5rem", md: ".3rem", lg: ".3rem" },
                }}
                prefix={<FaGithub size={18} style={{ padding: ".2rem" }} />}
            >
                GitHub
            </Button>
            </Anchor>
            <Anchor href={props.link}>
            <Button
                bg="transparent"
                borderColor="dark"
                h="2rem"
                hoverShadow="4"
                border="0px solid"
                textColor="dark"
                m={{
                x: { xs: ".2rem", md: ".2rem", lg: ".1rem" },
                y: { xs: ".5rem", md: ".3rem", lg: ".3rem" },
                }}
                prefix={<FaExternalLinkAlt size={18} style={{ padding: ".2rem" }} />}
            >
                Demo
            </Button>
            
            </Anchor>
        
        </Div>

        
        <Text
            textSize="paragraph"
            w={{ xs: "95%", md: "100%", lg: "100%" }}
            h={{ xs: "10%", md: "100%", lg: "25%" }}
            m={{ t: "1rem" }}
            textAlign="justify"
        >
            <b>Objetivo:</b> <br></br>
           {props.goal}

        </Text>
        
        <Row  d={{xs:"flex-wrap", md:"flex", lg:"flex"}} align="center" m={{t:"2rem"}}>
            <Col justify="center" textAlign="center" size={{xs:"12", md:"4", lg:"4"}}>
                <Text tag="h2">Funciona en:</Text>
                <FaMobileAlt size={"1.5rem"} className={props.phone} id="phone" />
                <FaTabletAlt size={"1.5rem"} className={props.tablet} id="tablet" />
                <FaLaptop size={"1.5rem"}    className={props.laptop} id="laptop" />
            </Col>
            <Col justify="center" textAlign="center" ize={{xs:"12", md:"4", lg:"4"}} align="center">
                <Text tag="h2">Utiliza:</Text>
                <BsBadgeVr size={"1.8rem"} className={props.VR} id="VR" />
                <BsBadgeAr size={"1.8rem"} className={props.AR} id="AR" />
            </Col>
            <Col justify="center" textAlign="center" size={{xs:"12", md:"4", lg:"4"}} align="center">
                <Text tag="h2">Disponible en:</Text>
                <GrAndroid size={"1.5rem"} className={props.Android}/>
                <GrApple size={"1.5rem"} className={props.IOS} />
                <GrWindows size={"1.5rem"} className={props.windows} />
            
            </Col>
        </Row>
        
        
    </Div>
</>
)
export default ProjectCard;
