import React from "react";
import Card from "react-bootstrap/Card";
import { BiLinkExternal } from "react-icons/bi";
import { Container, Row, Button, Col } from "react-bootstrap";

function EducationCards(props) {
  return (
    <Card className="project-card-view">
      <Container>
        <Row>

          <Col>
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Title style={{ textAlign: "left" }}>{props.title}</Card.Title>
          </Col>

          <Col>
            <Card.Body>

              <Card.Title>{props.degree}</Card.Title>
              <br/>
              
              <Card.Subtitle style={{ textAlign: "left", marginBottom: 20, marginLeft: 50 }}>
                {props.items[0]}
              </Card.Subtitle>
              <Card.Subtitle style={{ textAlign: "left", marginBottom: 20, marginLeft: 50 }}>
                {props.items[1]}
              </Card.Subtitle>
              <Card.Subtitle style={{ textAlign: "left", marginBottom: 0, marginLeft: 50 }}>
                {props.items[2]}
              </Card.Subtitle>
              
            </Card.Body>
          </Col>

          <Col className="education-container-btn">
            <Button variant="primary" href={props.link} target="_blank">
                <BiLinkExternal /> &nbsp;
                {"View School"}
            </Button>
          </Col>
        
        </Row>
      </Container>
    </Card>
  );
}
export default EducationCards;
