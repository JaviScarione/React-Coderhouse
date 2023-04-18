import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop, faMobilePhone, faTv, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {
 
  return (
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container className="cont">
          <Navbar.Brand href="/">
            <img src="../assets/images/Logo.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbaScroll" />
          <Navbar.Collapse id="navbarScroll" className="colapse">
            <Nav className="ms-5 me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="me-3" href="/" >
                <FontAwesomeIcon className="navbar-icon" icon={faHouse}  />Home
              </Nav.Link>
              <Nav.Link className="me-3" href="/category/notebooks" >
                <FontAwesomeIcon className="navbar-icon" icon={faLaptop} />Notebooks
              </Nav.Link>
              <Nav.Link className="me-3" href="/category/celulares" >
                <FontAwesomeIcon className="navbar-icon" icon={faMobilePhone} />Celulares
              </Nav.Link>
              <Nav.Link className="me-3" href="/category/televisores" >
              <FontAwesomeIcon className="navbar-icon" icon={faTv} />Televisores
              </Nav.Link>
              <Nav.Link className="me-3" href="/category/sonido" >
              <FontAwesomeIcon className="navbar-icon" icon={faHeadphones} />Sonido
              </Nav.Link>
            </Nav>
            <CartWidget cartItems={7} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
