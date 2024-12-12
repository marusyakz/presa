import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Slider = ({ slides }) => {
    return (
        <div className='relative z-50 bg-black py-10'>
            <div className='container mx-auto'>
                <div className="slider-container">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-content">
                                    <img src={slide.image} alt={slide.alt || `Slide ${index + 1}`} />
                                    {slide.caption && <p>{slide.caption}</p>}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Slider;

