import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

import workoutPng from "../../Assets/about.svg";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";

import { FaLinkedinIn } from "react-icons/fa";


function AboutCard() {
  return (

    <Container>
      <Row>

        <Col
          md={5}
          style={{ paddingTop: "20px", paddingBottom: "50px" }}
          className="about-img"
        >
          <img src={workoutPng} alt="workout" className="img-fluid" />
        </Col>

        <Col>

          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p style={{ textAlign: "justify" }}>
                  Apart from coding, some other activities that I love to do!
                </p>
                <ul>
                  <li className="about-activity">
                    <ImPointRight /> Workout at the Gym
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Go to Salt Spring Island and Camp
                  </li>
                  <li className="about-activity">
                    <ImPointRight /> Play Dungeons And Dragons
                  </li>
                </ul>
              </blockquote>

            </Card.Body>
          </Card>

        </Col>


      </Row>

      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/MattiasHenders"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mattias-henders/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/_.mattias._/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          <p>
            Feel free to <span className="red">connect </span>with me
          </p>
        </Col>
      </Row>
    </Container>

  );
}

export default AboutCard;
