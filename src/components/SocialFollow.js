import React from "react";
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faTiktok,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './SocialFollow.css'

export default function SocialFollow() {
  return (
    <>
    <DesktopBreakpoint>
    <div style={{marginBottom:'120px'}}>
    <div id="contacty" className="header">
      <h3 style={{fontWeight:'bold',fontSize:'40px'}}>ДЕ НАС ЗНАЙТИ</h3>
      </div>
      <div className="all_as">
       <a href="https://t.me/vnv_solutions"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="3x" />
      </a>
      <a href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="3x" />
      </a>
      <a href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
        className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="3x" />
      </a>
      <a href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="3x" />
      </a>
      <a href="https://www.linkedin.com/company/vnv-tech/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="3x" />
      </a>
      </div>
      </div>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
      <div style={{marginBottom:'90px'}}>
       <div id="contacty" className="header">
      <h3 style={{fontWeight:'bold',fontSize:'25px'}}>ДЕ НАС ЗНАЙТИ</h3>
      </div>
      <div className="all_as">
       <a href="https://t.me/vnv_solutions"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </a>
      <a href="https://www.facebook.com/people/VNV-Solutions/100088433736254/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.tiktok.com/@vnvsolutions?_t=8YVB28bloQP&_r=1"
        className="tiktok social">
        <FontAwesomeIcon icon={faTiktok} size="2x" />
      </a>
      <a href="https://www.instagram.com/vnv_solutions/?igshid=MWI4MTIyMDE%3D"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="https://www.linkedin.com/company/vnv-tech/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      </div>
      </div>
      </PhoneBreakpoint>
    </>
  );
}