import React from 'react';
import './DiscountRoulette.css';
import Button from 'react-bootstrap/Button';
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';


class Spinner extends React.Component {
  state = {
    name: "circle",
}

startRotation = () => {
    this.setState({
      name: "circle start-rotate"
    });

    setTimeout(() => {
      this.setState({ name: "circle start-rotate stop-rotate" }

        );
    }, Math.floor(Math.random() * 5000) + 1);

}


  render() {
    return(
      <div className="all_r">
      <div className="header">
      <DesktopBreakpoint>
        <h1 style={{fontSize:'50px'}}>КОЛЕСО ЗНИЖОК</h1>
      </DesktopBreakpoint>
      <PhoneBreakpoint>
        <h1 style={{fontSize:'30px'}}>КОЛЕСО ЗНИЖОК</h1>
      </PhoneBreakpoint>
      </div>
      <div className="triangle-down"></div>
      <ul className={this.state.name} style={{ transform:'rotate(${this.state.currentAngle}deg)'}}>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">20%</div>
          </li>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">15%</div>
          </li>
          <li className="wheel-part">
            <div className="text">25%</div>
          </li>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">10%</div>
          </li>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">30%</div>
          </li>
          <li className="wheel-part">
            <div className="text">5%</div>
          </li>
          <li className="wheel-part">
            <div className="text">10%</div>
          </li>
        </ul>
        <DesktopBreakpoint>
         <div className="text-center d-grid col-2 mx-auto" style={{ margin: '30px 20px 30px 20px', backgroundColor: 'black'}}><Button onClick={this.startRotation} className="spin-button" variant="light" size="lg">Крутити</Button>{' '}</div>
         </DesktopBreakpoint>
         <PhoneBreakpoint>
        <div className="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 20px 20px', backgroundColor: 'black'}} ><Button onClick={this.startRotation} className="spin-button" variant="light" size="sm">Крутити</Button>{' '}</div>
        </PhoneBreakpoint>
      <p className='parag'>Сробіть скріншот отриманої вами знижки та покажіть її нашему менеджеру</p>
    </div>
    );
  }
}
export default Spinner;