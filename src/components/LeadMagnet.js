import React from 'react';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import Button from 'react-bootstrap/Button';
import { Bounce } from "react-awesome-reveal";
import './LeadMagnet.css'
function LeadMagnet() {
  return (
    <div className="lead-magnet-block">
    <DesktopBreakpoint>
      <h1 className='hp'>При першому замовленні <strong>10% знижка</strong></h1>
      <p className='pd'>Отримайте  знижку на своє перше замовлення <strong>до 31.10</strong></p>
      <Bounce>
      <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 120px 20px', backgroundColor: 'black'}} ><Button href="#zamov" style={{ paddingLeft:'80px', paddingRight:'80px'}}  variant="outline-light" size="lg">Детальніше</Button>{' '}</div>
      </Bounce>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
      <h2 className='hp'>При першому замовленні <strong>10% знижка</strong></h2>
      <p className='pp'>Отримайте  знижку на своє перше замовлення <strong>до 31.10</strong></p>
      <Bounce>
      <div class="text-center d-grid col-4 mx-auto " style={{margin: '30px 20px 90px 20px', backgroundColor: 'black'}} ><Button href="#zamov" style={{ paddingLeft:'40px', paddingRight:'40px'}} variant="outline-light" size="sm">Детальніше</Button>{' '}</div>
      </Bounce>
      </PhoneBreakpoint>
      </div>
  );
}

export default LeadMagnet;