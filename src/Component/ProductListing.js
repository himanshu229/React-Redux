import React, { useEffect } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/Actions";

const ProductListing = () => {
  // console.log()
  const products = useSelector((state) => state.allProducts.products); // for geting state value from redux store
  const dispatch = useDispatch(); //for set the data on the store

  const fetchProducts = async () => {
    const response = await axios
      .get(`${process.env.REACT_APP_API_URL}products`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    console.log(response.data);
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <ProductComponent />
        </Row>
      </Container>
    </div>
  );
};

export default ProductListing;
