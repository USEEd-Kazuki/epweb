import React from "react";
import Hero5 from "../HerosectionComponent/Hero5";
import Particle from "../ParticleComponent/Particle";
import './Contact.css';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["contact"]);
  return (
    <>
    
    <Hero5 />
      <div className="contact-conatiner">
        <Particle />
        <div className="mainTile-container">
        <h2 className="main-title">{t("contacttitle")}</h2>
        <div className="main-text">
        {t("contactcontent")}
        </div>
        
        </div>
        <div className="contact-form">
          <form action="https://api.staticforms.xyz/submit" method="post">
            <input
              type="hidden"
              name="accessKey"
              value="ea2e3004-2289-4b08-a7fd-4c2e115e69ce"
            />

            <div className="item">
              <label className="label">Company Name</label>
              <input
                type="text"
                className="inputs"
                name="name"
                required
                placeholder="(EX.) EPknoT Co., Ltd."
              />
            </div>

            <div className="item">
              <label className="label">Name</label>
              <input
                type="text"
                className="inputs"
                name="name"
                required
                placeholder="(EX.) Yamada Taro"
              />
            </div>

            <div className="item">
              <label className="label">Department</label>
              <input
                type="text"
                className="inputs"
                name="name"
                required
                placeholder="(EX.) International Sales Department"
              />
            </div>

            <div className="item">
              <label className="label">Mail</label>
              <input
                type="email"
                className="inputs"
                name="email"
                placeholder="(EX.) office@epknot.com"
                required
              />
            </div>

            <div className="item">
              <label className="label">Qusetion</label>
              <textarea
                name="message"
                className="inputsf"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="button-area">
              <input type="submit" value="Submit"  />
              <input type="reset" value="Reset"  />
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
