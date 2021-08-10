import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";

function Jumbo() {
  return (
      <>
    <Jumbotron> 
      <h1>Local UP!</h1>
      <p>
        Our organization helps small and local businesses with marketing, search
        engine optimization (SEO), and technical services such as setting up a
        website. The goal of our organization is to give small local businesses
        a ost-effective way to market their services. Our overall mission is to
        give local businesses low-cost marketing olutions. As well as establish
        them an e-commerce presence by creating them website where they can sell
        their goods online.
      </p>

      <p>
        <Button variant="primary">Primary Button</Button>
      </p>
    </Jumbotron>
    <br/>
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron !</h1>
        <p>
           This is a modified fluid jumbotron which
           stretches the whole horizontal space.    
        </p>
        <Button variant="primary">
         Primary Button
        </Button>
      </Container>
    </Jumbotron>
    </>
  );
}
export default Jumbo;
