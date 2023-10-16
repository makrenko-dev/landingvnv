import React from 'react'
import { useMediaQuery } from 'react-responsive'
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import './Main.css'
import Button from 'react-bootstrap/Button';
const Main = () => {
	return (
		<div id="main_p">
			<DesktopBreakpoint>
				<div id='first_d'>
					 <h2 class='white_d'>LUIBOMYR LUZNYI</h2>
					 <h3 class='white1_d'>Co-Founder and CEO at <strong>VNV Solutions</strong></h3>
					 <div id='btn_d' class="d-grid col-4" ><Button href="#zamov" variant="outline-light" size="lg">Замовити</Button>{' '}</div>
				</div>
			</DesktopBreakpoint>	 
			<PhoneBreakpoint>
				<div id='first_p'>
					 <h2 class='white'>LUIBOMYR LUZNYI</h2>
					 <h3 class='white1'>Co-Founder and CEO at <strong>VNV Solutions</strong></h3>
					 <div class="text-center d-grid col-4 mx-auto" ><Button href="#zamov" variant="outline-light" size="lg">Замовити</Button>{' '}</div>
				</div>
			 </PhoneBreakpoint>
		</div>
	);
}

export default Main;