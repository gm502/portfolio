import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordle from "../../Assets/Projects/wordle.png";
import faceBlurApp from "../../Assets/Projects/faceBlurApp.png";
import Summits from "../../Assets/Projects/Summits.png";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "./Techstack";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          A few projects that I have worked on recently:
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Summits}
              isBlog={false}
              title="37Summits"
              description="Built with react as a fully responsive concept app for the ''37 Summits Challenge'', a challenge to reach the summit of all of the 37 volcanoes located in Guatemala. With functionality in both English and Spanish, it allows users to keep track of their progress, sort by relevant parameters, search, and obtain relevant information."
              ghLink="https://github.com/gabomishaan/37Summits"
              demoLink="https://gabomishaan.github.io/37Summits/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceBlurApp}
              isBlog={false}
              title="Face Blur App"
              description="Fully reponsive app built with react as a frontend, an image recognition API using Clarifai, Node.js and Express.js as a backend, and  PostgreSQL as a database. It has a sign in, register, and sign out functionalities. User enters a URL to an image, the app will detect human faces in the image and blur them out. username: ''test@gmail.com'' password: ''test''"
              ghLink="https://github.com/gabomishaan/face-blur-app-v2"
              demoLink="https://gabomishaan.github.io/face-blur-app-v2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Wrodle"
              description="Sharpen your Wordle skills with this fully responsive Wordle App created with javascript, HTML, and CSS. The project includes an on-screen interactive keyboard to accept user input, animations, and notifications."
              ghLink="https://github.com/gabomishaan/Wordle"
              demoLink="https://gabomishaan.github.io/Wordle/"              
            />
          </Col>

         
        </Row>
        <div className="skillset-projects">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        </div>

      
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
                  href="https://www.linkedin.com/in/gabo-m-3a4119244/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>




      </Container>
    </Container>
  );
}

export default Projects;
