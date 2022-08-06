import React from 'react';
import './Hero2.css';
import { Canvas } from "@react-three/fiber";
import { Suspense } from 'react';
import { Earth } from '../earth';
import Topsection from '../TopsectionComponent/Topsection';

const Hero2 = () => {
  return (
    <>
    <Topsection />
    <div className="CanvasContainer">
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </div>
    </>
  )
}

export default Hero2;