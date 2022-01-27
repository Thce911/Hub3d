import './css/App.css';
import {Link} from 'react-router-dom';
import { Container, Button, Icon, Text} from 'atomize';

function App() {
  return (
    <Container d="inline-block" align="center">
      <Text textSize="display2">
          This app View
        </Text>
      <Link to="/Home">
                <Button
                    h="2.5rem"
                    w="2.5rem"
                    bg="info300"
                    hoverBg="info400"
                    rounded="lg"
                    m={{ r: "1rem" }}
                >
                    <Icon name="HomeSolid" size="20px" color="info700" />
                </Button>
           </Link>
    </Container>
  );
}

export default App;
