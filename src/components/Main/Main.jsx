
import './Main.css'
import { MdLocalShipping } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

import { MdOutlineLocalPhone } from "react-icons/md";

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
    <>
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
     
        className='mySwiperMain'
       
      >
        <SwiperSlide>
          <section id="hero-slide1" className="d-flex align-items-center">
            <div className="container">
              <div className="hero-section">
                <h1>Le grand marché pour les achats sans fin</h1>
                <p>Découvrez une variété infinie de produits à des prix imbattables. Faites vos achats sans limites.</p>
              </div>

              <button className='button'>Explorer La Boutique</button>
            </div>

          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section id="hero-slide2" className="d-flex align-items-center">
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

      <section id="why-choose-us">
        <div className="container">

          <ul className="benefits-list">
            <li className="benefit-item">
            <MdLocalShipping size={20}/>
              <h3 className="benefit-title">Livraison Gratuite </h3>
            
            </li>
            <li className="benefit-item">
            <RiSecurePaymentLine size={20} />
              <h3 className="benefit-title">Paiement Securise </h3>
           
            </li>
            <li className="benefit-item">
            <FaCheck size={20} />
        
              <h3 className="benefit-title">Assurance qualité</h3>
         
            </li>
            <li className="benefit-item">
            <MdOutlineLocalPhone size={20} />
              <h3 className="benefit-title">Support Client</h3>
       
            </li>
          </ul>

        </div>
      </section>

    </>



  )
}

export default Main