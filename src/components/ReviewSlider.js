import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ReviewSlider.css';
import StarRating from './StarRating';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';


const ReviewSlider = ({ reviews }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
    <DesktopBreakpoint>
    <div className="review-slider_d">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3 style={{fontSize:'30px'}}>{review.author}</h3>
            <p style={{fontSize:'25px'}}>{review.comment}</p>
            <StarRating rating={review.rating} />
          </div>
        ))}
      </Slider>
    </div> 
    </DesktopBreakpoint>
    <PhoneBreakpoint>
    <div className="review-slider_p">
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <h3 style={{fontSize:'15px'}}>{review.author}</h3>
            <p style={{fontSize:'10px'}}>{review.comment}</p>
            <StarRating rating={review.rating} />
          </div>
        ))}
      </Slider>
    </div> 
    </PhoneBreakpoint>
    </>
  );
};

export default ReviewSlider;
