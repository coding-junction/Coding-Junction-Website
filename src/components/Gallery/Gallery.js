import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267946/CjGal/1671112527524_plcckn.jpg",
      "desc": "photu"
    },
    {
      "key": 2,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267442/CjGal/1671622335258_atdf2c.jpg",
      "desc": "photu"
    },
    {
      "key": 3,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267437/CjGal/1671112527492_ckogb6.jpg",
      "desc": "photu"
    },
    {
      "key": 4,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267437/CjGal/1671372336093_l0dha0.jpg",
      "desc": "photu"
    },
    {
      "key": 5,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267437/CjGal/1671622335880_ark31b.jpg",
      "desc": "photu"
    },
    {
      "key": 6,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697267437/CjGal/1671622335201_t692qm.jpg",
      "desc": "photu"
    },
    {
      "key": 7,
      "url": "https://res.cloudinary.com/dneogaofx/image/upload/v1697266683/CjGal/WhatsApp_Image_2023-10-13_at_17.46.18_b841d2bc_zyhoen.jpg",
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
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
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
        modules={[EffectCoverflow, Pagination, Autoplay]}
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
