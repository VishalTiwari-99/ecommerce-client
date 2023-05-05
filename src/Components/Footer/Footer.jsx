import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Wishstore is an online retail store where you can find a wide range of trending clothing and accessories. 
          We follow eco-friendly practices and stitch high quality clothes for you and your loved ones. We empower 
          women and men from the backward section of society, and contribute two percent of our annual profit to 
          the weaker section of this world.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, possimus labore? Iste hic 
            aliquam perspiciatis doloribus et 
            <p><br /></p>
            Phone: 90134XXXXX
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wishstore</span>
          <span className="copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer