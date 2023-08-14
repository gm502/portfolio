import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import {
  DiDatabase,
  DiMysql,
  DiGoogleAnalytics,
  DiPython,
  DiGithubBadge,
  DiScrum,
  DiWindows,
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,  
  DiNodejs,
  DiNpm,
  DiPostgresql,
  DiBootstrap,
  DiTerminal,
  DiGoogleDrive,
  DiGitBranch

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
        <DiGoogleAnalytics />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col> 
    </Row>  

    <Row style={{ justifyContent: "center", paddingBottom: "10px" }} >  
      <Col xs={4} md={2} className="tech-icons">
        <DiScrum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGitBranch />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGoogleDrive />
      </Col>
    </Row>

    <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>  
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>      
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> 
      </Col>      
    </Row>
   </Container> 
  );
}

export default Techstack;
