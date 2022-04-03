import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// import Particle from "../Particle";
// import Type from "./Type";
// import Work from "../Work/Work";
// import Projects from "../Projects/Projects";
// import Education from "../Education/Education";
// import About from "../About/About";
import homeLogo from "../../Assets/home-main.svg";

import loadable from '@loadable/component'
// const React = loadable(() => import("react"));
// const { Container, Row, Col } = loadable(() => import("react-bootstrap"));
// const homeLogo = loadable(() => import("../../Assets/home-main.svg"));
const Type = loadable(() => import("./Type"));
const Particle = loadable(() => import("../Particle"));
const Work = loadable(() => import("../Work/Work"));
const Projects = loadable(() => import("../Projects/Projects"));
const Education = loadable(() => import("../Education/Education"));
const About = loadable(() => import("../About/About"));

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
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
                I'M
                <strong className="main-name"> MATTIAS HENDERS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Work />

      <Projects />

      <Education />

      <About />

    </section>
  );
}

export default Home;
