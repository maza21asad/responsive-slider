import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import sunset1 from "./assets/Sunset/sunset_1.jpg";
import sunset2 from "./assets/Sunset/sunset_2.jpg";
import sunset3 from "./assets/Sunset/sunset_3.jpg";
import sunset4 from "./assets/Sunset/sunset_4.jpg";
import sunset5 from "./assets/Sunset/sunset_5.jpg";
import sunset6 from "./assets/Sunset/sunset_6.jpg";
import sunset7 from "./assets/Sunset/sunset_7.jpg";
import sunset8 from "./assets/Sunset/sunset_8.jpg";
import sunset9 from "./assets/Sunset/sunset_9.jpg";
import sunset10 from "./assets/Sunset/sunset_10.jpg";
import sunset11 from "./assets/Sunset/sunset_11.jpg";
import sunset12 from "./assets/Sunset/sunset_12.jpg";
import sunset13 from "./assets/Sunset/sunset_13.jpg";
import sunset14 from "./assets/Sunset/sunset_14.jpg";

function App() {
  return (
    <div className="container">
      <h2 className="heading">Sunset Moments</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper-container"
      >
        <SwiperSlide>
          <img src={sunset1} alt="imgSunset1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset2} alt="imgSunset2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset3} alt="imgSunset3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset4} alt="imgSunset4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset5} alt="imgSunset5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset6} alt="imgSunset6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset7} alt="imgSunset7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset8} alt="imgSunset8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset9} alt="imgSunset9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset10} alt="imgSunset10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset11} alt="imgSunset11" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset12} alt="imgSunset12" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset13} alt="imgSunset13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sunset14} alt="imgSunset14" />
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}

export default App;
