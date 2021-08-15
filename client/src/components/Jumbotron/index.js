import React from "react";
import { Jumbotron } from "react-bootstrap";
import smallbusiness from "../../images/localbusiness3.jpg";
import developer from "../../images/developers1.jpg";

function Jumbo() {
  return (
      <>
    <Jumbotron >
      <div className='col-sm-3'>
      <img
                    src={smallbusiness}
                    alt="Website Builder"
                    className="homepage-image"
                  />
      </div>
      <div className='col-sm-6'>
      <h1>Local UP!</h1>
      <p >
        Our organization helps small and local businesses with marketing, search
        engine optimization (SEO), and technical services such as setting up a
        website. The goal of our organization is to give small local businesses
        a cost-effective way to market their services. Our overall mission is to
        give local businesses low-cost marketing solutions. As well as establish
        them an e-commerce presence by creating them a website where they can sell
        their goods online.
      </p>
      </div>
      <div className='col-sm-3'>
      <img
                    src={developer}
                    alt="Website Builder"
                    className="homepage-image"
                  />
      </div>

    </Jumbotron>
    </>
  );
}
export default Jumbo;
