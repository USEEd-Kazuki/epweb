import React from 'react';
import './Topsection.css';
import TypeWriterEffect from 'react-typewriter-effect'

const Topsection2 = () => {
  return (
    <h1 className='typeWriter'>
    <TypeWriterEffect
       textStyle={{
         color: '#ffff',
         fontWeight: 500,
       }}
       startDelay={2000}
       cursorColor="#ffff"
       nextTextDelay={1000}
       typeSpeed={30}
       multiTextLoop={true}
       autoStart={true}
       multiText={[
        'TEAM',
        'Please scroll down.↓'
       ]}
     />
   </h1>
  )
}


export default Topsection2;