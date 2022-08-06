import React from "react";
import Hero3 from "../HerosectionComponent/Hero3";
import Particle from "../ParticleComponent/Particle";
import Image01 from "../imges/office1.jpeg";
import Image02 from "../imges/office2.jpeg";
import './About.css';
import { useTranslation } from "react-i18next";


const About = () => {
  const { t } = useTranslation(["about"]);
  return (
    <>
      <Hero3 />
      <div className="about-content">
        <Particle />
        <div className="about-title-section">
          <h1 className="about-title">ABOUT US</h1>
          <hr className="about-line" />
          <div className="about-title-content">
          {t("aboutus")}
          </div>
        </div>
        <div className="about-title-section">
          <h1 className="about-title">COMPANY</h1>
          <hr className="about-line" />
          <div className="about-title-content">
          {t("whatwedo")}
          </div>
        </div>

        <div className="about-photo-section">
        <div className="img-about1">
            <img src={Image01} alt="image01" className="imgsub-about1" />
        </div>

        <div className="img-about2">
            <img src={Image02} alt="image03" className="imgsub-about2" />
        </div>

        </div>
        <div className="about-profile-section">
          <h2 className="about-profile-title">PROFILE</h2>
          <hr className="about-line" />

          <table id="table01">
            <tbody>
            <tr>
              <th>Company Name</th>
              <td>{t("companyname")}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Founded</th>
              <td>{t("founded")}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>E-mail</th>
              <td>{t("email")}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>CEO</th>
              <td>{t("ceo")}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Office</th>
              <td>{t("address")}</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <th>Fields of Activities</th>
              <td>{t("fieldsofactivities")}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default About;
