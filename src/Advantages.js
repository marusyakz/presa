import React from 'react';
import { FaStar, FaLaptopCode, FaChartLine, FaRegHandshake } from 'react-icons/fa';
import { HorizontalTicker } from "react-infinite-ticker";
const Advantages = () => {
  const advantages = [
    { id: 1, text: 'Уникальный проект', icon: <FaStar /> },
    { id: 2, text: 'Современные решения', icon: <FaLaptopCode /> },
    { id: 3, text: 'Масштабируемость проекта', icon: <FaChartLine /> },
    { id: 4, text: 'Гибкая ценовая политика', icon: <FaRegHandshake /> },
  ];

  return (
    <div className='bg-black relative h-[400px] py-20 z-50'>
      {/* Фон с текстом INEED */}
      <div className='absolute -top-8 left-0 w-full h-full flex justify-center items-center'>
        <h1 className='text-[500px] font-bold text-white opacity-5'>
        <HorizontalTicker duration={25000}>
           <h1>INEED</h1>
           <h1>•</h1>
           
      </HorizontalTicker>
        </h1>
      </div>

      <div className="container mx-auto py-6">
        <h2 className="text-3xl text-center mb-8 text-white font-bold">Наши преимущества</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div key={advantage.id} className=" text-white rounded-lg flex items-center justify-center text-left">
              <div className="text-2xl text-white border-opacity-10 p-5 rounded-full border border-white">{advantage.icon}</div>
              <p className="text-lg text-white ml-2">{advantage.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
