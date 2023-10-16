import React from 'react';
import './Advantages.css';
import Cards from '../components/Card';
import { Zoom } from "react-awesome-reveal";
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import Button from 'react-bootstrap/Button';

const Advatages =({adv}) => {

  	const cardComponent = adv.map((a,i) =>{
		return <Zoom cascade damping={0.1}><Cards key={i} title={adv[i].title} text={adv[i].text} img={adv[i].id}/></Zoom>
	})
    return (
      <div className="all_a">
	       <div class="header">
	      	<DesktopBreakpoint>
	         <h1 style={{fontSize:'50px'}}>ЧОМУ МИ?</h1>
	        </DesktopBreakpoint>
	        <PhoneBreakpoint>
	        <h1 style={{fontSize:'30px'}}>ЧОМУ МИ?</h1>
	        </PhoneBreakpoint>
	       </div>  
	       <div className='cards'>
		       <div className='cardlist'>
		        {cardComponent}
		       </div>
	      </div> 
	      <DesktopBreakpoint>
	      <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 120px 20px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg">Замовити</Button>{' '}</div>
	      </DesktopBreakpoint>
	      <PhoneBreakpoint>
	      <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 90px 20px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="sm">Замовити</Button>{' '}</div>
	      </PhoneBreakpoint>
      </div>
    );
}

export default Advatages;