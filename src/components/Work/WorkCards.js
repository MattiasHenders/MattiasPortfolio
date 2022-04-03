import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function WorkCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img className="workImg" variant="top" src={props.imgPath} alt="card-img"/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>{props.job}</Card.Subtitle>
        <br></br>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal /> &nbsp;
          {"View Company"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default WorkCards;
