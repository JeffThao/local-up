import React from "react";
import NavBar from "../components/HomePortal/NavBar/NavBar";
import { Container} from "react-bootstrap";
// import smallbusiness from "../images/localbusiness3.jpg";
// import developer from "../images/developers1.jpg";
import Jumbo from '../components/Jumbotron/index';

function Home() {
  return (
    <div>
      <NavBar />
      <Jumbo />
      <Container fluid>
        
      </Container>
    </div>
  );
}

export default Home;
