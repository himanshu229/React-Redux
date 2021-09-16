import React, { useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/Actions.js";

function ProductDetails() {
  const history = useHistory();

  const { productId } = useParams();

  let product = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}products/${id}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      <Container style={{ marginTop: "30px" }}>
        <Row className="justify-content-md-center">
          {Object.keys(product).length === 0 ? (
            <div>...Loading</div>
          ) : (
            <Card style={{ textAlign: "center" }}>
              <Card.Img
                style={{ width: "180px", height: "180px", margin: "auto" }}
                variant="top"
                src={product.image}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>{product.category}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary" onClick={() => history.push("/")}>
                  {"<<"}Back
                </Button>
              </Card.Body>
            </Card>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;
