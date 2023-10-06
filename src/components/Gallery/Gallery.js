import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Gallery.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {

  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const count = (windowSize[0] <= 500)? 1 : 3 ;  

  const galleryArray = [
    {
      "key": 1,
      "url": "https://swiperjs.com/demos/images/nature-1.jpg",
      "desc": "photu"
    },
    {
      "key": 2,
      "url": "https://swiperjs.com/demos/images/nature-2.jpg",
      "desc": "photu"
    },
    {
      "key": 3,
      "url": "https://swiperjs.com/demos/images/nature-3.jpg",
      "desc": "photu"
    },
    {
      "key": 4,
      "url": "https://swiperjs.com/demos/images/nature-4.jpg",
      "desc": "photu"
    },
    {
      "key": 5,
      "url": "https://swiperjs.com/demos/images/nature-5.jpg",
      "desc": "photu"
    },
    {
      "key": 6,
      "url": "https://swiperjs.com/demos/images/nature-6.jpg",
      "desc": "photu"
    },
    {
      "key": 7,
      "url": "https://swiperjs.com/demos/images/nature-7.jpg",
      "desc": "photu"
    },
    {
      "key": 8,
      "url": "https://swiperjs.com/demos/images/nature-8.jpg",
      "desc": "photu"
    },
    {
      "key": 9,
      "url": "https://swiperjs.com/demos/images/nature-9.jpg",
      "desc": "photu"
    }
  ];

  return (
    <div className='gallery'>
      <div className='gallery-head'>
        Gallery
      </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={count}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#a3dae0",
          "--swiper-pagination-bullet-inactive-color": "#999999",
        }}
      >
      {
        galleryArray.map(galleryArray => (
          <SwiperSlide>
            <img src={galleryArray.url} alt={galleryArray.desc} />
          </SwiperSlide>
        ))
      }
      </Swiper>
    </div>
  );
}
