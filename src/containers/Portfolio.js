import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Carousel_Item from '../components/Carousel_Item';
import img1 from '../components/images/1.png';
import img2 from '../components/images/2.png';
import img3 from '../components/images/3.png';
import './Portfolio.css'
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import Button from 'react-bootstrap/Button';

function UncontrolledExample() {
  return (
    <>
    <div id="portfolio" class="header">
          <DesktopBreakpoint>
           <h1 style={{fontSize:'50px', marginTop:"90px", marginBottom:"60px"}}>ПОРТФОЛІО</h1>
          </DesktopBreakpoint>
          <PhoneBreakpoint>
          <h1 style={{fontSize:'30px', marginTop:"60px", marginBottom:"30px"}}>ПОРТФОЛІО</h1>
          </PhoneBreakpoint>
      </div>  
    <Carousel className="car">
    <Carousel.Item>
        <div class="all_c"><a class="gradient" href="#"><img style={{objectFit:'contain'}}width={950} height={500} src={img1} /></a></div>
        <Carousel.Caption>
          <h3 class="myh">Web Розробка</h3>
          <p>Lernitlive - веб-сервіс для тренерів і спеціалістів, де вони можуть
                                навчати
                                онлайн. Простими словами - це маркетплейс з додатковим функціоналом для проходження
                                курсів
                                і відвідуванням занять. Ви можете переглянути курси, вибрати свого тренера, відповідно
                                до його
                                оцінок та відгуків.
                            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <div class="all_c"><a class="gradient" href="#"><img style={{objectFit:'contain'}} width={950} height={500} alt="900x500" src={img2} /></a></div>
        <Carousel.Caption>
          <h3 class="myh">Сервіс доставки</h3>
          <p> Банкетний зал Ірен - служба доставки смачної їжі від Ірен. З
                                можливістю зареєструватися, замовити та оплатити прямо на сайті!
                            </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div class="all_c"><a class="gradient" href="#"><img style={{objectFit:'contain'}} width={950} height={500} alt="900x500" src={img3} /></a></div>
        <Carousel.Caption>
          <h3 class="myh">Маркетплейс</h3>
          <p>Volstiny production - маркетплейс для дизайнерського агентства.
                                Потужний
                                і креативний веб-сайт для творців. Унікальний дизайн, безліч анімацій і
                                внутрішній ринок – веб-сайт швидший за Forest Gump і готовий до SEO-реклами
                                кампанії.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
     <DesktopBreakpoint>
      <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 120px 20px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg">Хочу вже!</Button>{' '}</div>
    </DesktopBreakpoint>
    <PhoneBreakpoint>
      <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 20px 90px 20px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="sm">Хочу вже!</Button>{' '}</div>
    </PhoneBreakpoint>
    </>
  );
}

export default UncontrolledExample;