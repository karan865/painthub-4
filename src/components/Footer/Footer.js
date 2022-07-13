import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    {/* footer section starts here */}
  
    <footer className='footer'>
        <div className='footer-card'>
          <h3>Navigation</h3>
          <p>Home</p>
          <p>Search</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <div className='footer-card'>
          <h3>Find us Online</h3>
          <p><i className='fa fa-facebook'></i> facebook</p>
          <p><i className='fa fa-instagram'></i> instagram</p>
          <p><i className='fa fa-twitter'></i> twitter</p>
          <p><i className='fa fa-whatsapp'></i> whatsapp</p>
        </div>
        <div className='footer-card'>
          <h3>Store Help</h3>
          <p>FaQ's</p>
          <p>Shipping & return</p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
        <div className='footer-card'>
          <h3>E-mail</h3>
          <p>Paint@gmail.com</p>
          <p>Search</p>
          <p>About</p>
          <p>Contact</p>
        </div>
      </footer>

    
    </>
  )
}

export default Footer