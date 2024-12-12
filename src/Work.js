import React from 'react';
import Triangle from './Triangle';

const HowItWorks = () => {
    return (
        <div className='bg-gradient-to-l from-blue-800 text-white  border to-blue-400 h-[400px] flex items-center'>
            <div className='container mx-auto'>
                <div className='items-center flex justify-between w-full'>
                    <div className='flex w-full items-start justify-start'><Triangle /></div>
                    <div className='text-white'>
                        <h1 className='text-[28px] mb-5 uppercase font-bold'>Как это работает</h1>
                        <p className='text-lg'>
                            Наш процесс основан на 3 ключевых элементах: современные технологии,
                            высокопроизводительные серверы, надёжная база данных и качественный код.
                            Это обеспечивает стабильность и эффективность.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
