import React from 'react'
import './Services.css'
import { CardData, CardDataTwo } from '../../CardData/CardDataOne'
import Header from '../Header/Header'
import imgfour from "../../images/three-section-4.jpg"
import imgfive from "../../images/three-section-5.jpg"
import imgsix from "../../images/three-section-6.jpg"
import imgseven from "../../images/three-section-7.jpg"
import imgeight from "../../images/three-section-8.jpg"
import sanitization from "../../images/sanitization.jpg"
import FooterTwo from '../FooterTwo/FooterTwo'
import CardOne from '../Cards/CardOne'
import SliderFour from '../SliderFour'
import CardTwo from '../Cards/CardTwo'

export const Services = () => {
  return (
    <>
      <Header />
      <SliderFour />

      <section className='our-services inner'>
        <div className="our-services-text">
          <h1>Why choose our services?</h1>
        </div>
        <div className="our-services-card-box flex">
          <div className='services-card'>
            <img src={imgfour} alt="images" />
            <p>Expert Advice</p>
          </div>
          <div className='services-card'>
            <img src={imgfive} alt="images" />
            <p>Trained <br /> Professionals</p>
          </div>
          <div className='services-card'>
            <img src={imgsix} alt="images" />
            <p>Dust Free <br /> Mechanised <br /> Painting</p>
          </div>
          <div className='services-card'>
            <img src={imgseven} alt="images" />
            <p>Superior Finish</p>
          </div>
          <div className='services-card'>
            <img src={imgeight} alt="images" />
            <p>Full Home <br /> Cleaning After <br /> Painting</p>
          </div>
          {/* <div className='services-card'>
            <img src={imgsix} alt="images" />
            <p>Asian Paints Warranty*</p>
          </div> */}
        </div>
      </section>


 {/* services we offer starts here */}

 <section className='services-offer'>
   <div className="services-offer-text">
     <h1>Services we offer</h1>
   </div>
   <div className="services-offer-card-box flex inner">
     <CardOne details={CardData} />
   </div>
 </section>


    {/* COLOUR IDEAS-3 section starts  here */}
    <div className="color-ideas-section-2">
    <section className='color-ideas-section  inner flex'>
        <div className="color-ideas-left">
          <img src={sanitization} alt="img" />
        </div>
        <div className="color-ideas-right">
          <h2>Asian Paints San Assure</h2>
          <p>Introducing a perfect solution for sanitization by Asian Paints. Our San Assure Services kills harmful germs using quality equipment and materials, while following stringent safety protocols.</p>
          <button className='blue-btn'>KNOW MORE</button>
        </div>
      </section>
      </div>


      {/* WHY CHOOSE OUR SERVICES STARTS HERE */}
      <section className='why-choose-services inner'>
        <div className="why-choose-services-text">
          <h1>Why Choose Our Services</h1>
        </div>
        <div className="why-choose-services-card-box flex">
          <CardTwo detailsTwo={CardDataTwo} />
        </div>
      </section>


      <FooterTwo/>



    </>
  )
}
