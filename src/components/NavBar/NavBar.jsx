import React from "react";
import "./NavBar.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { Input } from "reactstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CartWidget from "../CartWidget/CartWidget.jsx";

export const NavBar = () => {
 
  return (
      <Navbar expand="lg" className="navbar" variant="dark">
        <Container className="cont">
          <Navbar.Brand href="/">
            <img src="assets/images/Logo.png" alt="Logo" className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbaScrollr" />
          <Navbar.Collapse id="navbarScroll" className="colapse">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <NavDropdown title="Categorías" id="categories">
                <NavDropdown.Item href="" >
                  Categoría 1
                </NavDropdown.Item>
                <NavDropdown.Item href="" >
                  Categoría 2
                </NavDropdown.Item>
                <NavDropdown.Item href="" >
                  Categoría 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="" >
                Ofertas
              </Nav.Link>
              <Nav.Link href="" >
                Vender
              </Nav.Link>
            </Nav>
            <Form className="search_form">
              <Form.Control type="search" placeholder="Buscar" aria-label="Search" />
              <Button variant="link" className="btn_search p-0">
                <FontAwesomeIcon
                  className="search_Icon"
                  icon={faMagnifyingGlass}
                  size="xl"
                />
              </Button>
            </Form>
              <CartWidget cartItems={7} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};
