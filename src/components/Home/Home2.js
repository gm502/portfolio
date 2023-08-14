import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";
import { MdEmail} from "react-icons/md";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row md={8} className="home-about-description row-bottom-margin">
        <h1 className="m1" style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
        </h1>
      </Row>
        <Row className="row-top-margin row-bottom-margin">
          <Col md={4} className="myAvtar"> <br/>
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col md={8} className="home-about-description">

            <p className="home-about-body">

              <br />I have always been passionate about building and fixing things. I constantly seek opportunities for growth and improvement. 
              I optimize processes and translate data into valuable and comprehensible insights. My goal is to {" "}  
              <i>
                <b className="purple">improve results, make the right decisions, and save costs.</b>
              </i>

               {" "}

            

              <br />
              <br />
              I currently work as an analyst leading app releases and deployments, I use  &nbsp; 
              <i>
                <b className="purple">data-driven strategies and technology to optimize processes and drive improvements. </b>
                {" "}
                <b className="purple">
                
                </b>
              </i>
              
              
            </p>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gabomishaan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>  
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/gabrielmishaan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="/#"
                  onClick={() => window.location = 'mailto:gabomishaan7@gmail.com'}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <MdEmail />
                </a>
              </li>              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
