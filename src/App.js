import "./css/App.css";
import { Div, Text, Row, Col, Container } from "atomize";


import Nav from "./components/Navbar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";


function App() {
  
  return (
    <>
      <Nav />
        <Row>
          <Div w="100%" h="450px">
            <Carousel />
          </Div>
        </Row>
        
      <Footer />
    </>
  );
}

export default App;
