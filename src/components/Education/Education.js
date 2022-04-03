//import EducationCards from "./EducationCards";
//import { Col, Container, Row } from "react-bootstrap";
//import Particle from "../Particle";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bcitImg from "../../Assets/bcit.webp";

import loadable from '@loadable/component'
// const React = loadable(() => import("react"));
// const { Col, Container, Row } = loadable(() => import("react-bootstrap"));
const Particle = loadable(() => import("../Particle"));
const EducationCards = loadable(() => import("./EducationCards"));
// const bcitImg = loadable(() => import("../../Assets/bcit.webp"));

function Education() {
  return (
    <Container fluid id="education" className="work-section">
      <Particle />
      <Container id="workexperience">
        <h1 className="project-heading">
          Completed <strong className="red">Education </strong>
        </h1>
        <br></br>
        <Container>
          <Row>
            <Col>
              <EducationCards
                imgPath={bcitImg}
                title="British Columbia Institute of Technology"
                degree="Commputer Systems Technology"
                items=
                {["▪ GPA 92%", "▪ Graduating with Honors", "▪ Nominated for Valedictorian"]}
                link="https://www.bcit.ca/"
              />
            </Col>

          </Row>
        </Container>
      </Container>
    </Container>
  );
}

export default Education;
