import React from 'react'
import banner from "../pics/banner.jpg"
import head1 from '../pics/banner.jpg'
import braids from '../pics/braids.jpg'
import dreads from '../pics/dreads.jpg'
import weave from '../pics/weave.jpg'
// import h1 from '../pics/h1.png'
// import h2 from '../pics/h2.png'
// import h3 from '../pics/h3.jpg'
// import h4 from '../pics/h4.jpg'
// import h6 from '../pics/h6.jpg'
import {useState, useEffect} from 'react'
// import './imageSlider.css'
import data from '../data/data'

const Slider = ()=>{

    let i=0
    var time = 2000;	// Time Between Switch
    let images = []

    // Image List

    // let images = [h1, h2, h3, h4, h6]
    
   
    const [index, setIndex] = useState(0);
    const delay = 5500;


  useEffect(() => {
    setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length-1 ? 0 : prevIndex + 1
        ),
      delay
    );

  }, [index]);

  return (
    <div>
    <div className="slideshow">
        <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((backgroundColor, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundColor }}
          >
            <div>

            <img src={backgroundColor}/>
            </div>
          </div>
        ))}
      </div>
{/* 
      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
          ></div>
        ))}
      </div> */}
    </div>
    </div>
  );
}

export default Slider