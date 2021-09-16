import React from "react";
import { Container, Row,Col, } from "react-bootstrap";
import { useSelector } from "react-redux";
import CardComponent from './CardComponent'
function ProductComponent() {

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    return (
      <Col sm>
      <CardComponent product={product}/>
      </Col>
    );
  });

  return (
    <div>
      <Container style={{ paddingTop: "20px" }}>
        <Row>
          <React.Fragment>{renderList}</React.Fragment>
        </Row>
      </Container>
    </div>
  );
}

export default ProductComponent;
