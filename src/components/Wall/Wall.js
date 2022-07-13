import React from 'react'
import './Wall.css'
import Header from '../Header/Header'
import designer1 from "../../images/designer-1.jpg"
import designer2 from "../../images/designer-2.jpg"
import designer3 from "../../images/designer-3.jpg"
import popular1 from "../../images/most-populat-1.jpg"
import popular2 from "../../images/most-populat-2.jpg"
import floatUp1 from '../../images/float-up-1.jpg'
import floatUp2 from '../../images/float-up-2.jpg'
import nilya from '../../images/nilaya.jpg'
import colorIdeas from '../../images/color-ideas.jpg'
import FooterTwo from '../FooterTwo/FooterTwo'
import SliderTwo from '../SliderTwo'

const Wall = () => {
  return (
    <>
      <Header />
      <SliderTwo />

      {/* enquiery section starts here */}
      <section className='enquire inner'>
        <div className="enquire-text">
          <h2>Wallpaper installation at home</h2>
          <p>Get assistance to choose the right wallpaper and enjoy professional installation service.</p>
        </div>
        <form className='form'>
          <div className="row ">
            <div className="col">
              <input type="text" className="form-control" placeholder="Name*" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Email*" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Mobile*" />
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="Pincode*" />
            </div>
          </div>
        </form>
        <div className="enquiry-btn">
        <button className='blue-btn enquiry-blue-btn'>ENQUIRE NOW</button>
        </div>
      </section>
     


      {/* designer-collection section starts here */}
      <section className='designer inner'>
        <div className="designer-text">
          <h1>Designer</h1>
          <p>collection</p>
        </div>
        <div className="designer-card-box flex">
          <div className="designer-card">
            <img src={designer1} alt="img" />
            <p>Good Earth for Nilaya- A natural wallpaper series</p>
          </div>
          <div className="designer-card">
            <img src={designer2} alt="img" />
            <p>Sabyasachi- Luxury defined wallpapers</p>
          </div>
          <div className="designer-card">
            <img src={designer3} alt="img" />
            <p>Signature- Specially designed for you</p>
          </div>
        </div>
        <div className="designer-button">
          <button className='white-btn'>SEE MORE</button>
        </div>
      </section>



      {/* most popular section starts here */}
      <section className='most-popular  inner flex'>
        <div className="most-popular-left width-100">
          <h1>Most <br /> Popular</h1>
          <p>Asian Paints Wall Coverings brings to you a wide collection of wallpapers to choose from. Our range expands by brand, category, colour, design and style. We have something for every home. Have a look at some of our most popular designs.</p>
          <button className='blue-btn popular-btn'>VIEW ALL</button>
        </div>
        <div className="most-popular-right width-100 flex">
          <div className="most-popular-right-card">
            <img src={popular1} alt="img" />
            <h2>Cicada</h2>
          </div>
          <div className="most-popular-right-card">
            <img src={popular2} alt="img" />
            <h2>Bask</h2>
          </div>
        </div>
      </section>




      {/* float-up section starts here */}
      <section className='float-up flex'>
        <div className="float-up-left">
          <img src={floatUp1} alt="img" />
        </div>
        <div className="float-up-right">
          <h2>Wallpaper <br /> Application</h2>
          <p>The process of installation is just as important as its selection. After you make a choice of the right colour and pattern for your home, our well-trained experts install the interior wallpaper with tools and materials- specially designed for Indian conditions.</p>
          <a href="https://www.youtube.com/">ENQUIRE NOW</a>
        </div>
      </section>


      <section className='float-up flex'>
        <div className="float-up-left">
          <img src={floatUp2} alt="img" />
        </div>
        <div className="float-up-right float-up-right-2">
          <h2>The ultimate guide to adding wallpaper in your home</h2>
          <p>We get it. While we are all comfortable with the idea of a paint project, the idea of trying wallpaper for walls tends to intimidate most people. However, home wallpapers open a whole new world for your surfaces. And especially designer wallpaper, which can work wonders to elevate the look of a room if you let it, even allowing you some creative expression.</p>
          <a href="https://www.youtube.com/">READ MORE</a>
        </div>
      </section>



      {/* nilya section starts here */}
      <section className='nilya inner flex'>
        <div className="nilya-left">
          <h3>The Essence of</h3>
          <h2>Nilaya</h2>
          <p>A wall covering does much more than just covering a wall - it brings the wall to life. Nilaya is an exquisite new offering from Asian Paints, a perfect blend of our rich understanding of surfaces and the Indian aesthetics. It reveals a world of inspiration, where design, material, and technique come together to create stunning surfaces. Nilaya's range of signature surfaces - home wallpapers, wall coverings, decals, borders and paintable interior wallpapers is curated from the finest manufacturers around the world.</p>
        </div>
        <div className="nilya-right">
          <img src={nilya} alt="img" />
        </div>
      </section>



      {/* COLOUR IDEAS section starts  here */}
      <section className='color-ideas-section inner flex'>
        <div className="color-ideas-left">
          <img src={colorIdeas} alt="img" />
        </div>
        <div className="color-ideas-right">
          <h6>COLOUR IDEAS STORE</h6>
          <h2>Would you like to touch and feel the different wallpapers? Visit the store near you!</h2>
          <a href="asianpaints.com/">KNOW MORE</a>
        </div>
      </section>



    <FooterTwo/>






    </>
  )
}

export default Wall