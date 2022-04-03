import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myPng from "../../Assets/avatar.png";
import AboutCard from "./AboutCard";
import Particle from "../Particle";

function About() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Particle/>
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="red"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              
              My passion is building server-side solutions, &nbsp;
              <i>
                <b className="red">RESTful API's </b> built using MERN, and{" "}
                <b className="red">
                  Lightweight Linux Servers
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing business 
              oriented products with <b className="red">Express.js</b> and
              <i>
                <b className="red">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="red"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myPng} className="img-fluid avatar-img" alt="avatar" />
          </Col>
        </Row>

        <AboutCard />

      </Container>
    </Container>
  );
}
export default About;
