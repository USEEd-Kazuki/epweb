import React from 'react'
import section01 from "../svg/01.svg";
import section02 from "../svg/02.svg";
import section03 from "../svg/03.svg";
import section04 from "../svg/04.svg";
import section05 from "../svg/05.svg";
import image06 from "../imges/06.jpg";
import './workitem.css';
import { useTranslation } from "react-i18next";

const Workitem = () => {

    const { t } = useTranslation(["work"]);
    
  return (
    <>
        <div className="container">

            <div className="block-1">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">SOURCING</h1>
                        <h1 className="work-number">01</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("sourcingtitle")}
                    </h2>
                    <p className="work-main-content">
                    {t("sourcingtitle1")}
                    </p>
                </div>
                <div className="svg-section">
                <img src={section01} alt="section01" className="svgsub-section-1" />
                </div>
            </div>

            <div className="rever-block-2">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">NEGOTIATION</h1>
                        <h1 className="work-number">02</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("negotiationtitle")}
                    </h2>
                    <p className="work-main-content">
                    {t("negotiationtitle1")}    
                     </p>
                </div>
                <div className="svg-section">
                    <img src={section02} alt="section02" className="svgsub-section-2" />
                </div>
            </div>

            <div className="block-3">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">FINANCE ARRANGEMENT</h1>
                        <h1 className="work-number">03</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("financearramgementtitle")}   
                    </h2>
                    <p className="work-main-content">
                    {t("financearramgementtitle1")}
                     </p>
                </div>
                <div className="svg-section">
                <img src={section03} alt="section03" className="svgsub-section-3" />
                </div>
            </div>

            <div className="rever-block-4">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">DOCUMENTATION</h1>
                        <h1 className="work-number">04</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("documentationtitle")}
                    </h2>
                    <p className="work-main-content">
                    {t("documentationtitle1")}    
                     </p>
                </div>
                    <div className="svg-section">
                    <img src={section04} alt="section04" className="svgsub-section-4" />
                    </div>
             </div>

            <div className="block-5">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">PROJECT MANAGEMENT</h1>
                        <h1 className="work-number">05</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("projectmanafementtitle")}
                    </h2>
                    <p className="work-main-content">
                    {t("projectmanafementtitle1")}
                    </p>
                </div>
                <div className="svg-section">
                <img src={section05} alt="section5" className="svgsub-section-5" />
                </div>
            </div>

            <div className="rever-block-6">
                <div className="work-main-seciton">
                    <hr className="work-line" />
                    <div className="work-main-title">
                        <h1 className="work-title">POST-CLOSING MANAGEMENT</h1>
                        <h1 className="work-number">06</h1>
                    </div>
                    <h2 className="work-subtitle">
                    {t("postfixturemanagementtitle")}
                    </h2>
                    <p className="work-main-content">
                    {t("postfixturemanagementtitle1")}
                    </p>
                </div>
                <div className="img-section">
                <img src={image06} alt="image06" className="imgsub-section" />
                </div>
            </div>
        </div>
    
    </>
  )
}

export default Workitem;