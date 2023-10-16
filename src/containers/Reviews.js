import React from 'react';
import ReviewSlider from '../components/ReviewSlider';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import {reviews} from '../components/Reviews_list';

function Reviews() {
  return (
    <div>
      <div id="reviews" className="header">
      <DesktopBreakpoint>
        <h1 style={{fontSize:'50px'}}>ВІДГУКИ</h1>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
        <h1 style={{fontSize:'30px'}}>ВІДГУКИ</h1>
      </PhoneBreakpoint>
      </div>
      <ReviewSlider reviews={reviews} />
    </div>
  );
}

export default Reviews;
