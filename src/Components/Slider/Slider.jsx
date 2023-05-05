import React from 'react';
import { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import "./Slider.scss";


const Slider = () => {
    const[currSlide, setCurrSlide] = useState(3);

    const data = [
        "img/slider/3.jpg",
        "img/slider/2.jpg",
        "img/slider/1.jpg",
        "img/slider/6.jpg",
        "img/slider/5.jpeg",
        "img/slider/4.jpg"
    ];

    const prevSlide = () => {
        setCurrSlide(currSlide===0 ? 5 : (prev) => prev -1);
    };

    const nextSlide = () => {
        setCurrSlide(currSlide===5 ? 0: (prev) => prev +1);
    };


  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currSlide*100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
            <img src={data[3]} alt="" />
            <img src={data[4]} alt="" />
            <img src={data[5]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon />
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon />
            </div>
        </div>
    </div>
  )
}

export default Slider