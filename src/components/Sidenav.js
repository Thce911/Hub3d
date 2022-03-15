import { Component } from "react";
import {Div, Input, Tag, Icon, Button} from 'atomize';


class Sidenav extends Component{

    render(){
        return(
            <>
                <Div m={{t:"9rem", }} p={{x:"1rem"}}>
                <Input
                    m={{b:"2rem"}}
                    placeholder="Buscar Objeto"
                    suffix={
                      <Button
                        pos="absolute"
                        onClick={() => console.log("clicked")}
                        bg="transparent"
                        hoverBg="gray800"
                        w="3rem"
                        top="0"
                        right="0"
                        rounded={{ r: "md" }}
                      >
                        <Icon
                          name="Search"
                          size="20px"
                          color="gray"
                          cursor="pointer"
                        />
                      </Button>
                    }
                  />
                  <Tag
                      m={{ r: "1rem", b: "1rem" }}
                      suffix={
                        <Icon
                          name="Cross"
                          size="12px"
                          m={{ l: "1rem" }}
                          cursor="pointer"
                        />
                      }
                    >
                      Glb
                    </Tag>
              </Div>
            </>
        );
    }

}

export default Sidenav;