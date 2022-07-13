import React from 'react'
import './Shop.css'
import Header from '../Header/Header'
import Slider from '../Slider'
import shopOne from '../../images/shop-1.jpg'
import shopTwo from '../../images/shop-2.jpg'
import shopThree from '../../images/shop-3.jpg'
import shopFour from '../../images/shop-4.jpg'
import shopFive from '../../images/shop-5.jpg'
import shopSix from '../../images/shop-6.jpg'
import shopSeven from '../../images/shop-7.jpg'
import shopEight from '../../images/shop-8.jpg'
import shopNine from '../../images/shop-9.jpg'
import stickerOne from '../../images/sticker-1.jpg'
import stickerTwo from '../../images/sticker-2.jpg'
import stickerThree from '../../images/sticker-3.jpg'
import stickerFour from '../../images/sticker-4.jpg'
import paintingTool from '../../images/painting-tool.jpg'
import FooterTwo from '../FooterTwo/FooterTwo'



const Shop = () => {
  return (
    <>
    <Header/>
    {/* <Slider/>     */}
    <Slider/>

    {/* shop images section starts here */}
    <section className='shop-image inner flex'>
       <img src={shopOne} alt="img" />
       <img src={shopTwo} alt="img" />
       <img src={shopThree} alt="img" />
       <img src={shopFour} alt="img" />
       <img src={shopFive} alt="img" />
       <img src={shopSix} alt="img" />
       <img src={shopSeven} alt="img" />
       <img src={shopEight} alt="img" />
       <img src={shopNine} alt="img" />
    </section>


    {/* stickers section starts here */}
    <section className='stickers inner'>
      <div className="sticker-text">
        <h2>Best selling stickers</h2>
      </div>
      <div className="stickers-card-box flex">
        <div className="sticker-card">
            <img src={stickerOne} alt="img" />
            <p>The Great Night of Shiva   <br />   <del className='del'>499.0</del> -149.0 <span className='orange'>(70 % OFF)</span></p>
        </div>
        <div className="sticker-card">
            <img src={stickerTwo} alt="img" />
            <p>Magnificence of a Peacock - Wall Stickers & Decals by Asian Paints <br /><del className='del'>499.0</del> -149.0 <span className='orange'>(70 % OFF)</span></p>
        </div>
        <div className="sticker-card">
            <img src={stickerThree} alt="img" />
            <p>Colours of Culture - Wall Stickers & Decals by Asian Paints <br /> <del className='del'>750.0</del> -149.0 <span className='orange'>(80 % OFF)</span></p>
        </div>
        <div className="sticker-card">
            <img src={stickerFour} alt="img" />
            <p>Original Disney The Little Mermaid Gaint - Wall Stickers & Decals by Asian Paints <br /> <del className='del'>1130.0</del> -499.0 <span className='orange'>(56% OFF)</span></p>
        </div>
      </div>
      <div className="sticker-button">
        <button className='white-btn'>VIEW ALL</button>
      </div>
    </section>



       {/* overlap seection starts here */}

       <section className='overlap inner'>
      <div className="overlap-image colorSpectra">
        <h1>Colour <br /> Spectra <br /> Cosmos</h1>
        <button className='white-btn'>BUY NOW</button>
      </div>
      <div className="overlap-blank">
      
      </div>
    </section>



      {/* COLOUR IDEAS-3 section starts  here */}
      <section className='color-ideas-section inner flex'>
        <div className="color-ideas-left">
          <img src={paintingTool} alt="img" />
        </div>
        <div className="color-ideas-right color-ideas-right-2 color-ideas-right-4">
          <h6>AMECHANISED PAINTING TOOLS</h6>
          <h2>Painting process, simplified</h2>
          <a href="https://www.youtube.com/">EXPLORE NOW</a>
        </div>
      </section>


    <FooterTwo/>







    </>
  )
}

export default Shop