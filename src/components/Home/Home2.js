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
              I am Gabo, a civil engineer turned <b className="purple"> software developer. </b> 
              <br />
              <br />I have always been passionate about building and fixing things. 
              As a Geo-Structural Engineer, I am responsible for{" "}  
              <i>
                <b className="purple">designing, optimizing, and overseeing the implementation</b>
              </i>

               {" "}of foundation systems of mega-structures.

              <br />
              <br /> 
              I discovered that the analytical, logical, and scientific methods of thought translate well to computer programming.

              <br />
              <br />
              My fields of interest are building new &nbsp;
              <i>
                <b className="purple">web technologies and products </b> and
                {" "}
                <b className="purple">
                   robust and responsive applications.
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
                  href="https://linkedin.com/in/gabo-mishaan"
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
                  onClick={() => window.location = 'mailto:mishaan.gabo@gmail.com'}
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
