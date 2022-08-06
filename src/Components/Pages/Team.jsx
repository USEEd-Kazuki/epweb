import React from "react";
import Hero4 from "../HerosectionComponent/Hero4";
import sylan from "../svg/sylanLogo.svg";
import Modal from "../ModalComponent/Modal";
import Modal1 from "../ModalComponent/Modal1";
import Modal2 from "../ModalComponent/Modal2";
import Modal3 from "../ModalComponent/Modal3";
import Modal4 from "../ModalComponent/Modal4";
import Particle from "../ParticleComponent/Particle";
import './Team.css';
import { useTranslation } from "react-i18next";


const Team = () => {
  const { t } = useTranslation(["team"]);
  

  return (
    <>
      <Hero4 />
      <div className="team-conatiner">
        <Particle />
        <div className="team-title-section">
          <h1 className="team-title">MEMBER</h1>
          <hr className="team-line" />
          <p className="team-title-content">
            {t("member")}
          </p>
        </div>

        <div className="teamMember-contaner">
          <h1 className="teamMember-title">Team Member</h1>
         <ul className="teamMember-container">
          <li className="teammember-contant">
            <h2 className="teamMember-position">CEO/Broker</h2>
            <div className="teamMember-name">{t("yamamotonaoki")}</div>
            <Modal />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">COO</h2>
            <div className="teamMember-name">{t("nagatakemari")}</div>
            <Modal1 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Broker</h2>
            <div className="teamMember-name">{t("hamayamakokoshiro")}</div>
            <Modal2 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Assistant</h2>
            <div className="teamMember-name">{t("tatenorina")}</div>
            <Modal3 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">System Engineer</h2>
            <div className="teamMember-name">{t("iwamotokazuki")}</div>
            <Modal4 />
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Accounting</h2>
            <div className="teamMember-name">{t("kumazawaakiko")}</div>
          </li>
          <li className="teammember-contant">
            <h2 className="teamMember-position">Accounting</h2>
            <div className="teamMember-name">{t("morichizue")}</div>
          </li>
         </ul>
        </div>
          
        <div className="aliance-section">
          <h1 className="aliance-title">ALIANCE</h1>
         <hr className="aliance-line" />
        <div className="svg-section">
                <img src={sylan} alt="sylan" className="sylan" />
        </div>
          <p className="aliance-content">
          {t("alliance")}
          </p>
          <div className="aliance-company">{t("alliancemember")}
           <div className="aliance-company-name">
           Blue Ocean Japan Co., Ltd.
           </div>
           <div className="aliance-company-name">
           Newton Ship Co., Ltd.
           </div>
           </div>
          </div>

        <div className="culture-section">
          <h1 className="culture-main-title">CULTURE</h1>
          <hr className="culture-line" />
          <p className="culture-content">
          {t("culture")}
           </p>
          <ul>
          <li className='culture-li'>
                <h3 className="culture-title">Enjoy</h3>
                <h3 className="culture-subcontent">{t("enjoy")}</h3>
              </li>
              <li className='culture-li'>
                <h3 className="culture-title">Professional</h3>
                <h3 className="culture-subcontent">{t("professional")}</h3>
              </li>
              <li className='culture-li'>
                <h3 className="culture-title">Transformation</h3>
                <h3 className="culture-subcontent">{t("transformation")}</h3>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Team;
