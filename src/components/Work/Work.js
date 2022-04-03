import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import WorkCards from "./WorkCards";
import Resume from "./Resume";
import triumfImg from "../../Assets/triumf.png"
import piccoloImg from "../../Assets/piccolo.png"
import clancysImg from "../../Assets/clancys.png"

function Work() {
  return (
    <Container fluid id="work" className="work-section">
      <Particle />
      <Container id="workexperience">
        <h1 className="project-heading">
          Work <strong className="red">Experience </strong>
        </h1>
        <br></br>
        <Container>
          <Row>

            <Col md={4}>
              <WorkCards
                imgPath={triumfImg}
                title="TRIUMF Particle Accelerator"
                job="Student Software Engineer"
                description=
                {"Developed novel technologies for tabletop physics experiments. " +
                "Used EPICS framework to make an affordable system for PhD students."}
                link="https://www.triumf.ca/"
              />
            </Col>

            <Col md={4}>
              <WorkCards
                imgPath={piccoloImg}
                title="Piccolo Software Inc."
                job="Junior Software Engineer"
                description=
                {"Responsible for new features of Android 'Panda' app for drivers. " +
                "Managed databases, object-oriented design, and app releases for clients."}
                link="https://www.piccolosoft.com/"
              />
            </Col>

            <Col md={4}>
              <WorkCards
                imgPath={clancysImg}
                title="Clancy's Meat Co."
                job="General Manager of Operations"
                description=
                {"Responsible for hiring and employee development." +
                "Managed ordering, inventory, and pricing on items from suppliers."}
                link="http://www.clancysmeatco.com/"
              />
            </Col>

          </Row>
        </Container>
        <br></br>

        <Resume />

        <h1 className="project-heading">
          Professional <strong className="red">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="red">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default Work;