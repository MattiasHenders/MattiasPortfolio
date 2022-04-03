import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import popImg from "../../Assets/Projects/plentyOfPhish.png";
import springOutImg from "../../Assets/Projects/springOut.jpg";
import voipImg from "../../Assets/Projects/voip.jpg";

function Projects() {
  return (
    <Container fluid id="project" className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="red">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={popImg}
              title="PlentyOfPhish"
              description="PlentyOfPhish” is a web app designed to help its users recognize and avoid phishing
              attempts from suspicious emails, phone numbers, and websites. Users register an account with the app and
              login to input either an email, phone number, or website. Users can also report emails, phone numbers, and 
              websites that they believe are suspicious."
              link="https://plenty-of-phish.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={springOutImg}
              title="Spring Out"
              description="Spring Out provides a discrete solution for employees suffering from new 
              (and old) domestic abuse situations across Canada as a result of being isolated/quarantined, 
              WFH to find resources and connect discreetly. Winner of the 2020 Together Vs. Hackathon. Recieved 
              the BCIT Excelence in Data Anyltics Award."
              link="https://devpost.com/software/springout"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={voipImg}
              title="Panda VoIP"
              description="A voice over IP server created for the Panda app in production in British Columbia.
              USing Linux, Docker, Asterisk, and a custom firewall to prevent attacks. Demonstrates a deep knowledge of
              UDP protocol and packet handling."
              link="https://www.piccolosoft.com/"
              />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
