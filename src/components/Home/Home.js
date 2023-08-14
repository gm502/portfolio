import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/photo.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Footer from "../Footer"

function Home() {
  return (
    <section>
      <Container fluid  id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                My name is
                <strong className="main-name"> GABRIEL MISHAAN</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col className="imgCenter" md={5} style={{ paddingBottom: 20 }}>
             <div className="imgCenter imageContainer"> 
              <img
                src={homeLogo}
                alt="home pic"
                className=" photo"
              />
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Footer />
    </section>
  );
}

export default Home;
