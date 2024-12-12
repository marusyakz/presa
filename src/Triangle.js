import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <div className=' relative z-50' id="triangle">
      <div id="dot"></div>
      <div id="spin-me">
        <div id="one" className="circle bg-white text-blue-500 flex items-center justify-center text-[24px]">
          <FaReact />
        </div>
        <div id="two" className="circle bg-white text-blue-500 flex items-center justify-center text-[24px]">
          <FaNodeJs />
        </div>
        <div id="three" className="circle bg-white text-blue-500 flex items-center justify-center text-[24px]">
          <FaDatabase />
        </div>
      
      </div>
      <div className='border-white bg-white/10 border-2  backdrop-blur-sm   border-opacity-80' id="triangle-two"></div>
    </div>
  );
};

export default HowItWorks;
