import React from "react";
import { Jumbotron } from "react-bootstrap";

// Navigation Bar component - using react bootstrap navbar
function Jumbo() {
  return (
    <div>
      <Jumbotron>
      <h1>LocalUP!</h1>
        <div>
        <p>
          Our organization helps small and local businesses with marketing,
          search engine optimization (SEO), and technical services such as
          setting up a website. The goal of our organization is to give small
          local businesses a cost-effective way to market their services. Our
          overall mission is to give local businesses low-cost marketing
          solutions. As well as establish them an e-commerce presence by
          creating them a website where they can sell their goods online.
        </p>
        </div>
      </Jumbotron>
    </div>
  );
}

export default Jumbo;