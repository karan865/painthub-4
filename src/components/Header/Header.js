import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
    {/* header-1 */}
    <div className="email">
      <p>
        phone : 7205777925 | email : paint@paint.com
      </p>
      <p>
        <i className='fa fa-facebook'></i>
        <i className='fa fa-instagram'></i>
        <i className='fa fa-whatsapp'></i>
        <i className='fa fa-twitter'></i>
      </p>
    </div>

    {/* header-2 */}
    <nav>
        <h1>PaintHub</h1>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
            <i className="fa fa-bars "></i>
        </label>
        <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/wall">WALLPAPERS</a></li>
            <li><a href="/health">HEALTH AND HEIGINE</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li><a href="/shop">SHOP</a></li>
        </ul>
    </nav>
    </>
  )
}

export default Header

