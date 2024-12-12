import React, { useState } from 'react';
import Hero from './Hero';
import Footer from './Footer';
import Work from './Work';
import Advantages from './Advantages';
import ForWhom from './ForWhom';
import Slider from './Slider';
const DomainChecker = () => {

  // Пример использования:
// import Slider from './Slider';
const slides = [
  { image: './img/1.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/2.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/3.jpg', caption: 'Slide 1', alt: 'First slide' },
  
  { image: './img/5.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/6.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/7.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/8.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/9.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/10.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/11.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/12.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/13.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/14.jpg', caption: 'Slide 1', alt: 'First slide' },
  { image: './img/15.jpg', caption: 'Slide 1', alt: 'First slide' },
];
// <Slider slides={slides} />;


  return (
    <div className="flex bg-gray-200 flex-col min-h-screen">
      {/* Контент */}
      <div className="flex-grow relative overflow-hidden">
        <div className="relative w-full h-full overflow-hidden">
          <Hero />

        </div>
        <Work />
        <Advantages />
        <ForWhom />
        <Slider slides={slides} />
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default DomainChecker;
