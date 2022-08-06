import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Link } from "react-router-dom";
import logo from '../svg/logo.svg' ;
import "./Header.css";
import {CgMenuRound} from 'react-icons/cg';
import {CgCloseO} from 'react-icons/cg';
import NavLink from "./NavLink";

const Header = () => {
  /* ---- i18n　---- */
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2){
      i18next.changeLanguage("jp");
    }
  },[]);
  const handleLanguageChange = (e) =>{
    i18n.changeLanguage(e.target.value);
  }
  /* -------- */
  
  const [header, setHeader] = useState(false);
  const changeBackground =  () =>{
    if(window.scrollY >= 100){
      setHeader(true);
    } else{
      setHeader(false);
    }
  }


  

  window.addEventListener('scroll',changeBackground)

  const hamburgerIcon = <CgMenuRound className="Hamburger" 
                          size='50px' 
                          color="white" 
                          onClick={() => setOpen(!open)}/>

  const closeIcon = <CgCloseO className="Hamburger" 
                          size='50px' 
                          color="white" 
                          onClick={() => setOpen(!open)}/>


const [open, setOpen] = useState(false);

const closeMobileMenu = () => setOpen(false);

  return (
    <>
      <nav className={header ? 'header active' : 'header'}>
        <div className="header-container">
          <div className="headerLogo-Contaner">
          <Link to="/" className="header-logo" >
            <img src={logo} alt='logo' className="logo-item" />
          <h3>{t("epknot")}</h3>
          <h3 className="back">{t("co.,ltd.")}</h3>
          </Link>
          </div>
          {open ? closeIcon : hamburgerIcon}
          {open &&<NavLink isMobile={true} closeMobileMenu={closeMobileMenu} />}

          <li className="trans-item"
              value={localStorage.getItem("i18nextLng")}
              onChange={handleLanguageChange}>
              <button className="trans-jp" onClick={handleLanguageChange} value="jp">{t("jp")}</button>
              <button className="trans-en" onClick={handleLanguageChange} value="en">{t("en")}</button>
          </li>
        </div>
      </nav>
    </>
  );
};

export default Header;
