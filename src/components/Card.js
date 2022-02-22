import {Component} from 'react';
import {Div, Text, Button, Icon} from 'atomize';

class Card extends Component{
    render(){
        const {name = '', author = 'jhon Doe', img="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/img%2F-MZs05a6u3UoaoVqRpzS.jpg?alt=media&token=35604331-c127-4986-9796-0cd0213ee9fa" } = this.props;
        return(
            <Div d="flex" flexDir="row">
                <Div
                  w="200px"
                  h="200px"
                  bgImg={img}
                  bgPos="center"
                  bgSize="cover"
                  rounded="lg"
                  m={{ b: "1rem", r: "1rem" }}
                >
                  <Div m={{ l: "10rem", t: ".5rem" }}>
                    <Button
                      h="2rem"
                      w="2rem"
                      bg="transparent"
                      hoverBg="danger400"
                      rounded="lg"
                    >
                      <Icon name="Heart" size="20px" color="danger700" />
                    </Button>

                    <Button
                      h="2rem"
                      w="2rem"
                      bg="transparent"
                      hoverBg="info400"
                      rounded="lg"
                    >
                      <Icon name="Download" size="20px" color="info500" />
                    </Button>
                  </Div>
                  <Div m={{ l: "1rem", t: "3rem" }}>
                    <Text
                      textSize="subheader"
                      m={{ l: "1rem", r: "1rem" }}
                      textColor="white"
                    >
                      {name}
                    </Text>
                    <Text
                      textSize="body"
                      m={{ l: "1rem", r: "1rem" }}
                      textColor="gray500"
                    >
                      {author}
                    </Text>
                  </Div>
                </Div>
              
            </Div>
        )
    }
}

export default Card;