import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../components/images/1.png';

const Carousel_Item =({image,title,text}) => {
  return (
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={img1} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
  );
}
export default Carousel_Item;