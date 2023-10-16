import React from 'react'
import './Card.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import img1 from './images/New.svg';
import img2 from './images/2.svg';
import img3 from './images/3.svg';
import img4 from './images/4.svg';
import img5 from './images/5.svg';
import img6 from './images/6.svg';


var arr=[];
arr.push(img1,img2,img3,img4,img5,img6);
function Cards({title,text,img}) {
  return (
    <div>
      <DesktopBreakpoint>
      <Card style={{ width: '20rem', margin: '3em' }}>
        <Card.Img variant="top" src={arr[img]}/>
        <Card.Body>
          <Card.Title style={{color: 'white', fontSize: '25px', fontWeight:'bold', textAlign:'center'}}>{title}</Card.Title>
        </Card.Body>
      </Card>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
      <Card style={{ width: '8rem',  margin: '1em'}}>
        <Card.Img variant="top" src={arr[img]}/>
        <Card.Body>
          <Card.Title style={{color: 'white', fontSize: '10px', fontWeight:'bold', textAlign:'center'}}>{title}</Card.Title>
         </Card.Body>
      </Card>
      </PhoneBreakpoint>
    </div>
  );
}

export default Cards