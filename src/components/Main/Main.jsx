
import './Main.css'


// Import Swiper styles
import 'swiper/css';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Main() {
  return (

    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiperMain"
    >
      <SwiperSlide>
        <section id="hero-slide1" class="d-flex align-items-center">
          <div class="container">
            <div class="hero-section">
              <h1>Le grand marché pour les achats sans fin</h1>
              <p>Découvrez une variété infinie de produits à des prix imbattables. Faites vos achats sans limites.</p>
            </div>

            <button className='button'>Explorer La Boutique</button>


          </div>

        </section>
      </SwiperSlide>
      <SwiperSlide>
      <section id="hero-slide2" class="d-flex align-items-center">
          <div class="container">
            <button className='button'>Explorer La Boutique</button>
          </div>

        </section>
      </SwiperSlide>
      <SwiperSlide>  <section id="hero-slide3" class="d-flex align-items-center">
          <div class="container">
         
            <button className='button'>Explorer La Boutique</button>
          </div>

        </section>
        </SwiperSlide>

    </Swiper>


  )
}

export default Main