import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { CgProfile } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import "./Header.css";

export default function Header() {
  const auth = useSelector((state) => state.authentication.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log("in header", auth);
  const logoutHandler = () => {
    dispatch(authAction.logout());
    navigate("/login");
  };
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="navbar-brand">MailBox</Navbar.Brand>

        <Nav>
          {!auth && (
            <NavLink
              className="nav-link"
              // className={" mx-3 text-light "}
              to={"/signup"}
            >
              Sign Up
            </NavLink>
          )}
          {!auth && (
            <NavLink
              // className={"mx-3 text-light "}
              className="nav-link"
              to={"login"}
            >
              Log In
            </NavLink>
          )}
          {auth && <CgProfile className="navbar-text" />}
        </Nav>
        {auth && <Button className="btn" onClick={logoutHandler}>Logout</Button>}
      </Container>
    </Navbar>
  );
}
