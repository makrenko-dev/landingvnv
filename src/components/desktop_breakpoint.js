import React from 'react';
import Breakpoint from './Breakpoints';

export default function DesktopBreakpoint(props) {
	 return (
	 <Breakpoint name="desktop">
	 {props.children}
	 </Breakpoint>
	 );
}