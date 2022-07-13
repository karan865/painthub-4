import React from 'react'
import Banner from '../Banner/Banner'
import Header from '../Header/Header'
import img1 from '../../images/p1.png'
import img2 from '../../images/p2.png'
import img3 from '../../images/p3.png'
import p5 from "../../images/p5.jpg"
import p6 from "../../images/p6.jpg"
import img4 from "../../images/img1.jpg"
import img5 from "../../images/img2.jpg"
import img6 from "../../images/img3.jpg"



import "./Home.css"
import SliderOne from '../SliderOne/SliderOne'
import FooterTwo from '../FooterTwo/FooterTwo'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />

      {/* three-section starts here */}
      <section  className='services flex' >
        <div className='services-card'>
          <img src={img1} alt="images" />
          <p>self priming</p>
        </div>
        <div className='services-card'>
          <img src={img2} alt="images" />
          <p>Superior coverage</p>
        </div>
        <div className='services-card'>
          <img src={img1} alt="images" />
          <p>Highly washable</p>
        </div>
        <div className='services-card'>
          <img src={img3} alt="images" />
          <p>Extremely durable</p>
        </div>
      </section>


      {/* quality section starts here */}
      <section className='quality flex'>
        <div className='quality-card'>
          <img src={img4} alt="images" />
          <p>COLOR PALLETES</p>
        </div>
        <div className='quality-card'>
          <img src={img5} alt="images" />
          <p>BEST SELLINGS</p>
        </div>
        <div className='quality-card'>
          <img src={img6} alt="images" />
          <p>TOP COLORS</p>
        </div>
      </section>



      {/* featured posts starts here */}
      <section className='featured'>
        <h1>Featured Product</h1>
        <div className="featured-row">
          <div className="featured-left-col featured-row-card">
            <img src={p5} alt="img" />
          </div>
          <div className="featured-right-col featured-row-card">
            <h2>Best Quality Paints</h2>
            <p>we are providing best quality paints. visit our shop once when you are free we are providing best quality paints. visit our shop once when you are free</p>
            <button className='blue-btn blue-btn-2'>Shop now</button>
          </div>
          <div className="featured-left-col featured-row-card">
            <img src={p6} alt="img" />
          </div>
          <div className="featured-right-col featured-row-card">
            <h2>Best Quality Brush</h2>
            <p>we are providing best quality paints. visit our shop once when you are free we are providing best quality paints. visit our shop once when you are free</p>
            <button className='blue-btn blue-btn-2'>Shop now</button>
          </div>
        </div>
        <svg id="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="white" fillOpacity="1" d="M0,288L40,282.7C80,277,160,267,240,250.7C320,235,400,213,480,224C560,235,640,277,720,266.7C800,256,880,192,960,186.7C1040,181,1120,235,1200,218.7C1280,203,1360,117,1400,74.7L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
      </section>

      {/* testemonial section starts here */}
      <section id='testimonials'>
        <h1>Testimonials</h1>
      </section>
      <SliderOne />



      {/* contact-us section starts here */}
      <section className='contact'>
        <h1>Contact us</h1>
        <div className="contact-row">
          <div className="contact-left-col">
          <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29205.75611740128!2d85.86576088256446!3d23.7930003807455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f46b84cf401591%3A0xd366eaa0a2518c13!2sBokaro%20Thermal%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1653184243333!5m2!1sen!2sin"
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
              title='map'
            />
          </div>
          <div className="contact-right-col">
            <h2>Join with us</h2>
            <form>
              <input type="text" name="" id="" placeholder='Name'/>
              <input type="text" name="" id="" placeholder='Subject'/>
              <textarea name="" id="" cols="40" rows="10" placeholder='Message'></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </section>

     <FooterTwo/>

      



    </div>
  )
}

export default Home