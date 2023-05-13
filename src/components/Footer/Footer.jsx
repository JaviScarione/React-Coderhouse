import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";



export const Footer = () => {
  let date = new Date()
    return (
        <div className="bg-dark p-0" data-bs-theme="dark">
          <footer className="footer container p-0">
            <div className="col-md-4 d-flex align-items-center">
              <Link to="/" className="text-muted text-decoration-none lh-1" >
                <img src="https://firebasestorage.googleapis.com/v0/b/carritoapp-react.appspot.com/o/Logo.png?alt=media&token=5da01fb2-9c5c-47b2-9ef1-198eeeca600e" alt="Logo" className="footerLogo" />
              </Link>
              <span className="ms-3 text-muted">&copy; {date.getFullYear()} Tiendas JS.</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled">
              <li className="ms-3">
                <Link
                  className="text-muted social"
                  to="https://www.linkedin.com/in/javierscarione"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
              </li>
              <li className="ms-3">
                <Link
                  className="text-muted social"
                  to="https://www.instagram.com/javiscarione/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram}/>
                </Link>
              </li>
              <li className="ms-3">
                <Link
                  className="text-muted social"
                  to="https://www.facebook.com/javi.scarione"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </li>
            </ul>
          </footer>
        </div>
      
    );
}