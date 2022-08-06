import React from 'react';
import './Topsection.css';
import TypeWriterEffect from 'react-typewriter-effect'

const Topsection = () => {
  return (
    <h1 className='typeWriter'>
    <TypeWriterEffect
       textStyle={{
         color: '#ffff',
         fontWeight: 500,
       }}
       startDelay={2}
       cursorColor="#ffff"
       nextTextDelay={3}
       typeSpeed={30}
       multiTextLoop={true}
       autoStart={true}
       multiText={[
      'Welcome to EPknoT.',
      'We are a leading arranger in shipping business.',
      'Providing variety of services.',
      'Please scroll down.↓'
       ]}
     />
   </h1>
  )
}


export default Topsection;