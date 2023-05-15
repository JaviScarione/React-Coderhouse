import "./NavBar.css";

import { useState, memo } from "react";

import { CartWidget } from "../CartWidget/CartWidget.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faLaptop, faMobilePhone, faTv, faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavBar = memo(() => {

  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expand="lg" className="navbar" variant="dark" expanded={expanded} onToggle={setExpanded}>
      <Container className="cont">
        <Navbar.Brand>
          <NavLink to="/">
            <img src="https://firebasestorage.googleapis.com/v0/b/carritoapp-react.appspot.com/o/Logo.png?alt=media&token=5da01fb2-9c5c-47b2-9ef1-198eeeca600e" alt="Logo" className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="button"/>
        <Navbar.Collapse id="responsive-navbar-nav" className="colapse">
          <Nav className="ms-5 me-auto my-2 my-lg-0" >
            <NavLink className="me-3 nav-link" to="/" onClick={handleCollapse}>
              <FontAwesomeIcon className="navbar-icon" icon={faHouse}  />Home
            </NavLink>
            <NavLink className="me-3 nav-link" to="/category/notebooks" onClick={handleCollapse}>
              <FontAwesomeIcon className="navbar-icon" icon={faLaptop} />Notebooks
            </NavLink>
            <NavLink className="me-3 nav-link" to="/category/celulares" onClick={handleCollapse}>
              <FontAwesomeIcon className="navbar-icon" icon={faMobilePhone} />Celulares
            </NavLink>
            <NavLink className="me-3 nav-link" to="/category/televisores" onClick={handleCollapse}>
              <FontAwesomeIcon className="navbar-icon" icon={faTv} />Televisores
            </NavLink>
            <NavLink className="me-3 nav-link" to="/category/sonido" onClick={handleCollapse}>
              <FontAwesomeIcon className="navbar-icon" icon={faHeadphones} />Sonido
            </NavLink>
          </Nav>
          <NavLink onClick={handleCollapse}>
            <CartWidget />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
})