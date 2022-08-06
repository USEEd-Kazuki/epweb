import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../svg/logo.svg";

const Footer = () => {
  const { t } = useTranslation(["common"]);
  return (
    <div className="footer-container">
      <div className="footer-title-container">
        <img src={logo} alt="logo" className="footerLogo-item" />
      </div>
      <div className="footer-adress">
        <h1 className="adress-title">{t("address")}</h1>
        <hr className="address-titleLine"/>
        <div className="adress-post">{t("postcode")}</div>
        <div className="adress">{t("addressoffice")}</div>
      </div>

      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <Link to="/">HOME</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/Work">WORK</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/About">ABOUT US</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/Team">TEAM</Link>
          </div>
          <div className="footer-link-items">
            <Link to="/Contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <small className="website-rights">
        Copyright © EPknoT Co., Ltd. all rights reserved.
      </small>
    </div>
  );
  
};

export default Footer;
