import { Div, Text, Image} from 'atomize';



const TeamCard = (props) =>(
    <>
    <Div rounded="lg" bg="white" w="220px" h="240px"  align="center" justify="center" m="2rem">
        <Div textAlign="center" p={{y:"2rem"}} >
            <Image  w="100px" h="100px" rounded="circle" src={props.profile} m={{y:".3rem"}} />
            <Text  textSize="title" textWeight="600">
                {props.name}
            </Text>
            <Text textSize="caption"  textColor="gray800" textWeight="600">
                {props.role}
            </Text>
        </Div>
    </Div>
    </>
)

export default TeamCard