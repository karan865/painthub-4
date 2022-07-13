import React from 'react'
import './Health.css'
import Header from '../Header/Header'
import healthOne from "../../images/health-1.png"
import healthTwo from "../../images/health-2.png"
import healthThree from "../../images/health-3.png"
import whyAsianPaintOne from "../../images/why-anian-apint-1.png"
import whyAsianPaintTwo from "../../images/why-anian-apint-2.png"
import whyAsianPaintThree from "../../images/why-anian-apint-3.png"
import shopOnlineOne from "../../images/shop-online-1.jpg"
import shopOnlineTwo from "../../images/shop-online-2.jpg"
import shopOnlineThree from "../../images/shop-online-3.jpg"
import colorIdeasTwo from "../../images/color-ideas-2.jpg"
import colorIdeasThree from "../../images/color-ideas-3.jpg"
import FooterTwo from '../FooterTwo/FooterTwo'
import SliderThree from '../SliderThree'

const Health = () => {
  return (
    <>
    <Header/>
    <SliderThree/>

    {/* health and heigine sections start here */}
    <section className='health inner'>
      <div className="health-text">
        <h2>Health & Hygiene</h2>
        <p>Our wide range of health and hygiene products include sanitizers, anti-bacterial paints, floor cleaners, etc. Together, these products offer protection to individuals, families and communities, and enable them to live a healthier life. Like all our products, pass through quality checks at various levels to provide unmatched quality.</p>
      </div>
      <div className="health-card-box flex">
        <div className="health-card">
          <img src={healthOne} alt="img" />
          <h3>Wall Paints</h3>
        </div>
        <div className="health-card">
          <img src={healthTwo} alt="img" />
          <h3>Home & Personal Hygiene</h3>
        </div>
        <div className="health-card">
          <img src={healthThree} alt="img" />
          <h3>Masks and PPE</h3>
        </div>
      </div>
    </section>



    {/* overlap seection starts here */}

    <section className='overlap inner'>
      <div className="overlap-image">
        <h5>INTRODUCING</h5>
        <h1>Royale Health Shield</h1>
        <h3>The Anti-bacterial Paint</h3>
        <a href="https://www.youtube.com/">KNOW MORE</a>
      </div>
      <div className="overlap-blank">
      
      </div>
    </section>



    {/* why choose asian paints */}

    <section className='why-asian-paint inner'>
      <h1>Why choose Asian Paints products?</h1>
      <div className="why-asian-paint-card-box flex">
          <div className="why-asian-paint-card">
            <img src={whyAsianPaintOne} alt="img" />
            <h4>KILLS 99% GERMS</h4>
          </div>
          <div className="why-asian-paint-card">
            <img src={whyAsianPaintTwo} alt="img" />
            <h4>TRUSTED NAME</h4>
          </div>
          <div className="why-asian-paint-card">
            <img src={whyAsianPaintThree} alt="img" />
            <h4>ASSURED CARE</h4>
          </div>
      </div>
    </section>


    {/* shop-online section start here */}
    <section className='shop-online inner'>
    <h1>Shop online</h1>
      <div className="shop-online-card-box flex">
          <div className="shop-online-card">
            <img src={shopOnlineOne} alt="img" />
            <h4>Viroprotek Advanced Hand Sanitizer  </h4>
          </div>
          <div className="shop-online-card">
            <img src={shopOnlineTwo} alt="img" />
            <h4>Viroprotek Advanced Universal Sanitizer</h4>
          </div>
          <div className="shop-online-card">
            <img src={shopOnlineThree} alt="img" />
            <h4>Viroprotek Ultra Floor Clwaner Citrus</h4>
          </div>
      </div>
    </section>


    
    {/* COLOUR IDEAS-2 section starts  here */}
    <section className='color-ideas-section inner flex'>
    <div className="color-ideas-right color-ideas-right-3">
          <h6>INTRODUCING BEAUTIFUL HOMES SERVICE </h6>
          <h2>Personalized interior designs with professional execution</h2>
          <a href="https://www.youtube.com/">ENQUIRE NOW</a>
        </div>
        <div className="color-ideas-left color-ideas-left-3">
          <img src={colorIdeasTwo} alt="img" />
        </div>
        
      </section>


        {/* COLOUR IDEAS-3 section starts  here */}
    <section className='color-ideas-section inner flex'>
        <div className="color-ideas-left">
          <img src={colorIdeasThree} alt="img" />
        </div>
        <div className="color-ideas-right color-ideas-right-2">
          <h6>ASIAN PAINTS SAFE PAINTING SERVICE</h6>
          <h2>Get the right assistance for all your painting needs</h2>
          <a href="https://www.youtube.com/">ENQUIRE NOW</a>
        </div>
      </section>


      <FooterTwo/>

    </>
  )
}

export default Health