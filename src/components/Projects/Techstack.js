import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,  
  DiNodejs,
  DiGithubBadge,
  DiNpm,
  DiPostgresql,
  DiBootstrap,
  DiTerminal,

} from "react-icons/di";
import {
  SiPostman,
  SiHeroku,
} from "react-icons/si";

function Techstack() {
  return (
    <Container>
    <Row style={{ justifyContent: "center", paddingBottom: "10px", paddingTop: "20px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col> 
    </Row>  

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >  
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubBadge />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNpm />
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminal />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
      </Col>      
    </Row>
   </Container> 
  );
}

export default Techstack;
