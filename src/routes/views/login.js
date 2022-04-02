import React, { Component } from 'react';
import {Div, Col, Row, Text, Input, Button, Icon, Modal, Anchor} from 'atomize';


const LoginModal = ({ isOpen, onClose, showPassword }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} align="center" rounded="md" >
       <Div p={{x:"1rem"}}>
           <Text textSize="subheader" > Inicia Sesión</Text>
           <Text textSize="caption" textColor="gray900">Si aún no haz creado tu cuenta puedes <Anchor>registrarte aquí </Anchor></Text>
       </Div>
       <Div m={{y:"1rem"}} justify="center" p={{x:"1rem"}}>
       <Input
            rounded="xl"
            placeholder="correo institucional"
            suffix={
                <Icon
                name="Email"
                color="black400"
                size="16px"
                cursor="pointer"
                pos="absolute"
                top="50%"
                right="0.75rem"
                transform="translateY(-50%)"
                />
            }
            />
            <Input
            m={{y:"1rem"}}
            rounded="xl"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            suffix={
            <Button
                pos="absolute"
                onClick={() => this.setState({ showPassword: !showPassword })}
                bg="transparent"
                w="3rem"
                top="0"
                right="0"
                rounded={{ r: "md" }}
            >
                <Icon
                name={showPassword ? "EyeSolid" : "Eye"}
                color={showPassword ? "danger800" : "success800"}
                size="16px"
                />
            </Button>
            }
        />


       </Div>

        <Div d="flex" justify="center">
          <Button onClick={onClose} bg="info700" rounded="circle">
            Iniciar sesión
          </Button>
        </Div>
      </Modal>
    );
  };


  






class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
          showPassword: false,
        };
      }
    render() {
        const { showModal } = this.state;
        return (
            <>
                <Button  bg="transparent" textColor="black900" prefix={<Icon name="UserCircle" size="20px" color="black900" m=".2rem"/>} onClick={() => this.setState({ showModal: true })}>Inicia Sesión</Button>
                <Button  bg="Transparent" textColor="black900" prefix={<Icon name="UserSolid" size="20px" color="black900" m=".2rem" />} >Registrar</Button>
                <LoginModal
                    isOpen={showModal}
                    onClose={() => this.setState({ showModal: false })}
                    />
            </>
        );
    }
}

export default Login;