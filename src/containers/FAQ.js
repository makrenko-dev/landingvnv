import Accordion from 'react-bootstrap/Accordion';
import React from 'react'
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import './FAQ.css';

function AllCollapseExample() {
  return (
    <>
    <DesktopBreakpoint>
    <div className="header">
     <h1 style={{fontSize:'50px', marginTop:"90px", marginBottom:"60px"}}>FAQ</h1> 
     </div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Accordion style={{width:'80%', marginBottom:'120px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Які технології та мови програмування ви використовуєте для розробки продуктів?</Accordion.Header>
        <Accordion.Body>
          Наша компанія використовує сучасні технології та мови програмування, такі як Python, JavaScript, PHP,
           та інші, щоб створити високоякісні продукти для наших клієнтів. 
           Ми завжди стежимо за новими тенденціями та оновленнями в галузі розробки.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Як довго зазвичай триває процес розробки ваших проектів?</Accordion.Header>
        <Accordion.Body>
          Тривалість розробки проекту може сильно варіюватися в залежності від складності та обсягу проекту. 
          Однак ми завжди працюємо швидко та ефективно, спираючись на наш досвід та професіоналізм, 
          щоб надати вам якісний результат у найкоротший термін.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </DesktopBreakpoint>
    <PhoneBreakpoint>
    <div className="header">
       <h1 style={{fontSize:'30px', marginBottom:"30px"}}>FAQ</h1>
    </div>
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <Accordion style={{width:'70%', marginBottom:'90px'}}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="otd">Які технології та мови програмування ви використовуєте для розробки продуктів?</Accordion.Header>
        <Accordion.Body>
          Наша компанія використовує сучасні технології та мови програмування, такі як Python, JavaScript, PHP,
           та інші, щоб створити високоякісні продукти для наших клієнтів. 
           Ми завжди стежимо за новими тенденціями та оновленнями в галузі розробки.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Як довго зазвичай триває процес розробки ваших проектів?</Accordion.Header>
        <Accordion.Body>
          Тривалість розробки проекту може сильно варіюватися в залежності від складності та обсягу проекту. 
          Однак ми завжди працюємо швидко та ефективно, спираючись на наш досвід та професіоналізм, 
          щоб надати вам якісний результат у найкоротший термін.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
    </PhoneBreakpoint>
    </>
  );
}

export default AllCollapseExample;