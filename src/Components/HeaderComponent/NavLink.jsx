import React from 'react';
import './Header.css' ;
import { Link } from "react-router-dom";


const NavLink = (props) => {
    
  return (
    <>
              < ul className="MobileHeader-ul">
            <li className="MobileHeader-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link to="/" 
                    className="MobileHeader-links">
              HOME
              </Link>
            </li>
            <li className="MobileHeader-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link
                to="/Work"
                className="MobileHeader-links"
              >
                WORK
              </Link>
            </li>
            <li className="MobileHeader-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link
                to="/About"
                className="MobileHeader-links"
              >
                ABOUT US
              </Link>
            </li>
            <li className="MobileHeader-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link
                to="/Team"
                className="MobileHeader-links"
              >
                TEAM
              </Link>
            </li>
            <li className="MobileHeader-item" onClick={() => props.isMobile && props.closeMobileMenu()}>
              <Link
                to="/Contact"
                className="MobileHeader-links"
              >
                CONTACT
              </Link>
            </li>
          </ul>
    </>                                                     
  )
}

export default NavLink;