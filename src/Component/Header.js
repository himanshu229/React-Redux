import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="primary" style={{'paddingBottom': '20px'}} variant="dark">
        <Container>
          <Navbar.Brand style={{'fontSize': '50px'}}>Fake Shop</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
