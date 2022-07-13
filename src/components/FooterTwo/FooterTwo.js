import React from 'react'
import './FooterTwo.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import playStore from '../../images/google-play-store.png'
const FooterTwo = () => {
    return (
        <>
            <section className='footerTwo'>
                <div className="footer-upper flex">
                    <div className="footer-subscribe responsive">
                        <h2>Get the latest trending news</h2>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">Subscribe</span>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact responsive">
                        <h2>Contact Us</h2>
                        <div className="phone">
                            <h5>1800-209-5678   </h5>
                            <h3>|</h3>
                            <a href="https://www.youtube.com/"> EMAIL</a>
                        </div>

                    </div>
                    <div className="footer-store responsive">
                        <h2>Find a store</h2>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Enter Pincode" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">Go</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='line' />

                <div className="footer-lower flex">
                    <div className="footer-lower-left flex">
                        <div className="about-list responsive">
                            <h5>ABOUT</h5>
                            <ul>
                                <li>Asian Paints</li>
                                <li>Investors</li>
                                <li>Corporate Social Responsibility</li>
                                <li>Research & Technology</li>
                                <li>Careers</li>
                                <li>Supplier Registration</li>
                                <li>News and Media</li>
                                <li>Awards and Recognition</li>
                                <li>Recycle</li>
                                <li>Sustainability</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="about-list responsive">
                            <h5>CONTENT</h5>
                            <ul>
                                <li>Blogs</li>
                                <li>Videos</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="about-list responsive">
                            <h5>POLICIES</h5>
                            <ul>
                                <li>Warranty</li>
                                <li>Quality Policy</li>
                                <li>Customer Policy</li>
                                <li>EHS</li>
                                <li>Terms & Conditions</li>
                                <li>Cookie Policy</li>
                            </ul>
                        </div>
                        <div className="about-list responsive">
                            <h5>TOOLS</h5>
                            <ul>
                                <li>Store Locator</li>
                                <li>Contractor Finder Services</li>
                                <li>Paint Budget Calculator</li>
                                <li>Paint Selector</li>
                                <li>Colour Academy</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-lower-right responsive">
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                INDIA
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="https://www.youtube.com/">GLOBAL</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/">PAKISTAN</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/">BANGLADESH</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/">NEPAL</a></li>
                                <li><a className="dropdown-item" href="https://www.youtube.com/">SRI LANKA</a></li>
                            </ul>
                        </div>
                        <div className="play-store">
                            <img src={playStore} alt="" />
                        </div>
                        <p className='footer-icons'>
                            <i className='fa fa-facebook'></i>
                            <i className='fa fa-instagram'></i>
                            <i className='fa fa-whatsapp'></i>
                            <i className='fa fa-twitter'></i>
                            <i className='fa fa-youtube'></i>
                        </p>
                    </div>
                </div>


                <hr />

                <div className="designed-by">
                    <h6>©PanintHUb |  Designed By Chuni lal Yadav</h6>
                </div>
            </section>

        </>
    )
}

export default FooterTwo