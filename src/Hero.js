import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';  // Импортируем необходимые компоненты из react-motion
import InteractiveGlobe from './InteractiveGlobe';  // Импортируйте ваш компонент глобуса
import ParticlesBackground from './ParticlesBackground';

const Hero = ({ domain, setDomain, zone, setZone, checkDomain }) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Задержка, чтобы инициировать анимацию только после загрузки компонента
        const timer = setTimeout(() => setLoaded(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <div className='bg-white/5 backdrop-blur-xl border-b border-white border-opacity-10 flex items-center justify-center absolute w-full left-0 top-0 bg-opacity-75 z-50'>
                <div className='container mx-auto'>
                    <div className='flex items-center justify-between'>
                        <div className='text-gray-300 border-r border-white border-opacity-10 p-5 font-bold'>INEED </div>
                        <div>
                            <span className='text-gray-300 border-x border-white border-opacity-10 p-5'>Как это работает</span>
                            <span className='text-gray-300 border-x border-white border-opacity-10 p-5'>Преимущества </span>
                            <span className='text-gray-300 border-x border-white border-opacity-10 p-5'>Для кого этот портал </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero min-h-screen overflow-hidden relative after:bg-black after:absolute after:z-40 after:block after:w-full after:h-screen after:bg-opacity-35 bg-gray-950 flex items-center flex-col justify-center">
                {/* Контейнер для глобуса и частиц */}
                <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
                    <InteractiveGlobe />
                    {/* Контейнер для частиц */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-20">
                        <ParticlesBackground />
                    </div>
                </div>

                <Motion
                    style={{
                        height: spring(loaded ? 300 : 0, { stiffness: 120, damping: 17 }),
                        opacity: spring(loaded ? 1 : 0, { stiffness: 60, damping: 20 }),
                        lineOpacity: spring(loaded ? 1 : 0, { stiffness: 60, damping: 20 }),
                    }}
                >
                    {style => (
                        <>
                            {/* Горизонтальная линия */}
                            <div
                                className="bg-white w-full absolute left-0 bg-opacity-25"
                                style={{
                                    height: '1px',
                                    top: '50%',
                                    opacity: style.lineOpacity,
                                }}
                            ></div>

                            {/* Контейнер с текстом */}
                            <div className="relative w-full z-50">
                                <div className="container mx-auto">
                                    <div
                                        className="border border-white bg-black/8 backdrop-blur-xl w-full p-10 flex flex-col items-center rounded-lg border-opacity-10"
                                        style={{
                                            opacity: style.opacity,
                                            height: style.height,
                                        }}
                                    >
                                        {/* Плавное появление текста с использованием react-motion */}
                                        <Motion style={{ opacity: spring(1, { stiffness: 60, damping: 20 }) }}>
                                            {textStyle => (
                                                <h1
                                                    className="font-bold text-white text-[28px] py-5 uppercase typing-effect"
                                                    style={{
                                                        opacity: textStyle.opacity,
                                                    }}
                                                >
                                                    Платформа B2B для эффективных закупок
                                                </h1>
                                            )}
                                        </Motion>
                                        <p className="text-white">Публикация заявок, отклики от проверенных поставщиков.</p>
                                        <a className='text-white/70 uppercase px-5 border-opacity-15 tracking-wide py-2 border-white font-bold border mt-10 rounded-sm text-sm' href=''>Подробнее</a>
                                        
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Motion>
            </div>
        </>
    );
};

export default Hero;
