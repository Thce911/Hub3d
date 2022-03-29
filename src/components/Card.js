import {Component} from 'react';
import {Div, Text, Button, Icon} from 'atomize';
import SideView from './SideViewer';


const Card = (props) => (
              <>
                <Div
                  w="220px"
                  h="220px"
                  bgImg={props.img}
                  bgPos="center"
                  bgSize="cover"
                  rounded="lg"
                  m={{ b: ".5rem", r: ".5rem" }} 
                  >
                    
                  <Div m={{ l: "11rem", t: ".5rem",r:"1rem" }}>
                    <Button
                      h="2rem"
                      w="2rem"
                      bg="transparent"
                      hoverBg="danger400"
                      rounded="lg"
                    >
                      <Icon name='Heart' size="20px" color="danger700" id="fav"/>
                    </Button>
                    <SideView  />
                  </Div>

                  <Div m={{ l: "1rem", t: "3rem" }}>
                    <Text
                      textSize="subheader"
                      m={{ l: "1rem", r: "1rem" }}
                      textColor="white"
                    >
                      {props.name}
                    </Text>
                    <Text
                      textSize="body"
                      m={{ l: "1rem", r: "1rem" }}
                      textColor="gray500"
                    >
                      {props.author}
                    </Text>
                  </Div>
                </Div>
              
              </>
        )

export default Card;