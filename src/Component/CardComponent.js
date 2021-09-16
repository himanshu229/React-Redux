import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
function CardComponent(props) {
    const history = useHistory();
  return (
    <div>
        <Card
          style={{
            width: "25rem",
            height: "25rem",
            marginTop: "2rem",
            textAlign: "center",
          }}
        >
          <Card.Img
            style={{
              width: "140px",
              height: "140px",
              margin: "auto",
              marginTop: "20px",
            }}
            variant="top"
            src={props.product.image}
          />
          <Card.Body>
            <Card.Title>{props.product.title}</Card.Title>
            <Card.Text>$ {props.product.price}</Card.Text>
            <Card.Text>{props.product.category}</Card.Text>
            <Button
              variant="primary"
              onClick={() => history.push(`/product/${props.product.id}`)}
            >
              More Details{" "}
            </Button>
          </Card.Body>
        </Card>
    </div>
  );
}

export default CardComponent;
