import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>MailBox</Navbar.Brand>

        <Nav>
          <NavLink className={"max-3 text-light"} to={"/signup"}>
            Sign Up
          </NavLink>
          <NavLink className={"max-3 text-light"} to={"login"}>
            Log In
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
