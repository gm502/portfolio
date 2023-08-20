import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import wordle from "../../Assets/Projects/wordle.png";
import UN from "../../Assets/Projects/UN.png";
import housing from "../../Assets/Projects/housing.png";
import movie from "../../Assets/Projects/movie.png";
import faceBlurApp from "../../Assets/Projects/faceBlurApp.png";
import Summits from "../../Assets/Projects/Summits.png";
import {AiFillGithub} from "react-icons/ai";
import { FaLinkedinIn} from "react-icons/fa";
import { MdEmail} from "react-icons/md";
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
              title="Data Preparation and Visualization - COVID19"
              description="Used SQL Server to explore and extract insights from publicly available COVID19 Data. I then created informative visualizations that unveiled key insights and comprehensive understanding of business metrics and trends through Tableau."
              ghLink="https://github.com/gabomishaan/CovidData/blob/main/CovidData.sql"
              demoLink="https://gabomishaan.github.io/37Summits/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={faceBlurApp}
              isBlog={false}
              title="Face Blur App"
              description="Fully reponsive app built with react as a frontend, an image recognition API using Clarifai, Node.js and Express.js as a backend, and  PostgreSQL as a database. It has a sign in, register, and sign out functionalities. User enters a URL to an image, the app will detect human faces in the image and blur them out. The username information is stored in a secure database with password encryption."
              ghLink="https://github.com/gabomishaan/face-blur-app-v2"
              demoLink="https://gabomishaan.github.io/face-blur-app-v2/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wordle}
              isBlog={false}
              title="Data Preparation and Visualization - Employee Data"
              description="I harnessed SQL Server to delve into and evaluate employee and sales data sourced from a publicly available company dataset. Subsequently, I generated insightful visual representations using Tableau, unveiling essential observations and fostering a thorough grasp of business metrics and patterns."
              ghLink="https://public.tableau.com/app/profile/gabriel.mishaan/viz/Sales3YearAnalysis_16895334473060/SalesPerformance"
              demoLink="https://gabomishaan.github.io/Wordle/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={housing}
              isBlog={false}
              title="Data Cleaning - Public Housing Data"
              description="Designed a data cleaning solution in SQL for public housing data, handling duplicates, missing values, inconsistencies, outliers, and data validation. Enhanced data quality and integrity."
              ghLink="https://github.com/gabomishaan/DataCleaning_HousingData/blob/main/Data_Cleaning_Housing_Data.sql"
              demoLink="https://gabomishaan.github.io/Wordle/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UN}
              isBlog={false}
              title="Data Exploration - UN Demographic Indicators"
              description="Employed SQL Server to analyze publicly accessible United Nations data pertaining to life expectancy. The project aimed to extract valuable insights by examining changes over time and exploring the impact of various parameters on life expectancy trends."
              ghLink="https://github.com/gabomishaan/UN_Demographics_Data/blob/main/UN_Demographic_Indicators.sql"
              demoLink="https://gabomishaan.github.io/Wordle/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Data Exploration - Film Data"
              description="Utilizing Python's pandas and seaborn libraries, this project aims to analyze the correlation between various film-related variables (such as budget, runtime, and IMDb ratings) and movie gross revenue. By visualizing these relationships through scatter plots and correlation matrices, the project seeks to uncover insights into the factors influencing a movie's financial success based on publicly available film data."
              ghLink="https://github.com/gabomishaan/Movies_Revenue_analysis/blob/main/MovieDataAnalysis.ipynb"
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

export default Projects;
