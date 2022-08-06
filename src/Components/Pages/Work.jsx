import React from "react";
import "../../App.css";
import Hero1 from "../HerosectionComponent/Hero1";
import Workitem from "../WorkitemComponent/Workitem";
import "./Work.css";
import Particle from "../ParticleComponent/Particle";
import { useTranslation } from "react-i18next";

const Work = () => {
  const { t } = useTranslation(["work"]);
  
  return (
    
    <>
        <div className="work-container">
      <Hero1 />
          <Particle />
          <div className="work-content">
                <h1 className="work-title0">About Our Work</h1>
                <hr className="work-title-line" />
                <div className="work-title-content">
                {t("aboutourwork")}
                </div>
          </div>
            <Workitem />
        </div>
    </>
  );
};


export default Work;
