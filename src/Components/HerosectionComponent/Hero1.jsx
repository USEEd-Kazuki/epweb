import React from 'react';
import '../../App.css';
import Topsection1 from '../TopsectionComponent/Topsection1';
import './Hero.css';

const Hero1 = () => {
  return (
    <div className="hero-container">
      <Topsection1 />
      <video src='Aseets/movie/Work2.mp4' autoPlay loop muted />
    </div>
  )
}

export default Hero1;