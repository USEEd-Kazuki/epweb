import React from 'react';
import Hero2 from '../HerosectionComponent/Hero2';
import Particle from '../ParticleComponent/Particle';
import {Animator, batch, Fade, ScrollContainer, ScrollPage, Sticky, MoveOut} from 'react-scroll-motion';
import './Home.css';
import { useTranslation } from "react-i18next";

const Home = () => {

  const { t } = useTranslation(["home"]);

  const FadeUp = batch(Fade(), Sticky(), MoveOut(0,-800));

  return (
    <>
   <div className="home-main-container">
    <ScrollContainer >
    <Hero2 /> 
    <Particle />
       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-title'>
          {t("main0")}
          </h1>
         </Animator>
       </ScrollPage>

       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-content'>
          {t("main1")}
          </h1>
         </Animator>
       </ScrollPage>

       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-content'>
          {t("main2")}
          </h1>
         </Animator>
       </ScrollPage>

       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-content'>
          {t("main3")}
          </h1>
         </Animator>
       </ScrollPage>

       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-content'>
         {t("main4")}
          </h1>
         </Animator>
       </ScrollPage>

       <ScrollPage >
         <Animator animation={FadeUp}>
          <h1 className='home-main-content'>
         {t("main5")}
          </h1>
         </Animator>
       </ScrollPage>
     </ScrollContainer>
   </div>

    </>
  )
}

export default Home;