import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Tabs.css'
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import Button from 'react-bootstrap/Button';

function FillExample() {
  return (
    <div >
      <div id="poslygi" class="header">
          <DesktopBreakpoint>
           <h1 style={{fontSize:'50px', marginTop:"90px", marginBottom:"60px"}}>НАШІ ПОСЛУГИ</h1>
          </DesktopBreakpoint>
          <PhoneBreakpoint>
          <h1 style={{fontSize:'30px', marginTop:"60px", marginBottom:"30px"}}>НАШІ ПОСЛУГИ</h1>
          </PhoneBreakpoint>
      </div>  
      <PhoneBreakpoint>
      <div className="tabs_s">
        <Tabs
          className='tab_a'
          style={{fontSize:"10px",overflow:'auto', overflowY:'hidden', display:'flex', alignItems:'center',flexWrap:'nowrap', backgroundColor:'black', border:'1px solid white', borderRadius:'10px 10px 0px 0px', margin:'0px 0px 0px 0px', height:'50px'}}
           defaultActiveKey="profile"
             id="fill-tab-example"
             fill
        >
          <Tab className="tab" eventKey="home" title="Розробка програмного забезпечення">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Якісно</strong>
            <strong style={{fontSize:'12px'}}> Швидко</strong>
            <strong style={{fontSize:'12px'}}> Перспективно</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Наше програмне забезпечення спрямоване на вирішення ваших бізнес-проблем і задоволення конкретних бізнес-потреб. <br /><br />
            Наша досвідчена команда може розробити програмне забезпечення для широкого спектру галузей і застосувань, зокрема сільського господарства, фінансів, охорони здоров’я та логістики тощо. <br /><br />
            Наша мета — надати високоякісне програмне забезпечення, яке вирішить ваші бізнес-завдання та проблеми, а також оптимізує робочі процеси, щоб допомогти вашому бізнесу розвиватися.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab" eventKey="profile" title="Розробка унікальної ERP системи">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Кожен <br />важливий</strong>
            <strong style={{fontSize:'12px'}}> Лідерство тут,<br /> щоб служити</strong>
            <strong style={{fontSize:'12px'}}> Стійкий</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Розробка індивідуальних систем ERP (Enterprise Resource Planning), які оптимізують ваші бізнес-операції, покращують зв’язок між відділами та автоматизують процеси. <br /><br />
            Наші ERP-рішення адаптовані до унікальних потреб вашого бізнесу та можуть бути інтегровані з іншими програмними рішеннями для створення комплексної системи управління бізнесом.
          <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab" eventKey="longer-tab" title="Розробка інтернет-магазину">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Постійні<br />вдосконалення</strong>
            <strong style={{fontSize:'12px'}}> Якість</strong>
            <strong style={{fontSize:'12px'}}> Ефективність</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо послуги з розробки інтернет-магазину для клієнтів, які хочуть створити онлайн-присутність для свого бізнесу.<br /><br />
            Наша команда може створити та розробити налаштований веб-сайт електронної комерції, який буде простим у використанні та забезпечує безперебійну взаємодію з користувачем.<br /><br />
            Наша мета — допомогти вам збільшити онлайн-продажі, розширити клієнтську базу та покращити загальну ефективність бізнесу.<br /><br />
            Глибоке розуміння та великий досвід дозволяє нам створювати найбільш конверсійні інтернет-магазини для вас.
          <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab" eventKey="contact" title="Підтримка та оновлення">
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Комунікація</strong>
            <strong style={{fontSize:'12px'}}> Покращення</strong>
            <strong style={{fontSize:'12px'}}> Експертиза</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо постійну підтримку та оновлення, щоб гарантувати, що ваші програмні рішення залишаються актуальними та повністю функціональними. <br /><br />
            Наша команда підтримки завжди готова вирішити будь-які проблеми чи проблеми, що виникають, тому ми надаємо регулярні оновлення для покращення продуктивності та додаємо нові функції, якщо це необхідно. <br /><br />
            Наша мета — забезпечити нашим клієнтам душевний спокій і забезпечити, щоб їхні програмні рішення з часом відповідали їхнім потребам.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab" eventKey="bot" title="Розробка ботів">
             <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Автоматизація</strong>
            <strong style={{fontSize:'12px'}}> Інновації</strong>
            <strong style={{fontSize:'12px'}}> Якість</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми спеціалізуємося на розробці індивідуальних ботів, які можуть автоматизувати завдання та підвищити ефективність. <br /><br />
            Ми можемо створювати ботів для широкого спектру програм, включаючи обслуговування клієнтів, соціальні мережі та продажі тощо. <br /><br />
            Наша мета — надати вам передову технологію, яка покращує продуктивність і покращує взаємодію з клієнтами.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab" eventKey="site" title="Перенесення сайту">
             <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'12px'}}> Навички</strong>
            <strong style={{fontSize:'12px'}}> Досвід</strong>
            <strong style={{fontSize:'12px'}}> Результат</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо послуги перенесення веб-сайту для клієнтів, які хочуть перенести свій веб-сайт з однієї платформи на іншу. <br /><br />
            Наша команда розробників може гарантувати, що перехід буде плавним і бездоганним, а веб-сайт залишатиметься повністю функціональним протягом усього процесу. <br /><br />
            Наша мета полягає в тому, щоб звести до мінімуму будь-які збої в онлайн-присутності наших клієнтів і гарантувати, що їхній веб-сайт продовжує відповідати їхнім бізнес-потребам.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black', fontSize:'12px'}} ><Button href="#zamov" variant="light" size="sm"><b>Хочу</b></Button>{' '}</div>
          </Tab>
        </Tabs>
      </div>
      </PhoneBreakpoint>
      <DesktopBreakpoint>
      <div className="tabs_ss">
        <Tabs
          className='tab_ad'
          style={{fontSize:"25px",overflow:'auto', overflowY:'hidden', display:'flex', alignItems:'center',flexWrap:'nowrap', backgroundColor:'black', border:'1px solid white', borderRadius:'10px 10px 0px 0px', margin:'0px 0px 0px 0px', height:'100px'}}
           defaultActiveKey="profile"
             id="fill-tab-example"
             fill
        >
          <Tab className="tab_d" eventKey="home" title="Розробка програмного забезпечення">
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Якісно</strong>
            <strong style={{fontSize:'30px'}}> Швидко</strong>
            <strong style={{fontSize:'30px'}}> Перспективно</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Наше програмне забезпечення спрямоване на вирішення ваших бізнес-проблем і задоволення конкретних бізнес-потреб. <br /><br />
            Наша досвідчена команда може розробити програмне забезпечення для широкого спектру галузей і застосувань, зокрема сільського господарства, фінансів, охорони здоров’я та логістики тощо. <br /><br />
            Наша мета — надати високоякісне програмне забезпечення, яке вирішить ваші бізнес-завдання та проблеми, а також оптимізує робочі процеси, щоб допомогти вашому бізнесу розвиватися.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab_d" eventKey="profile" title="Розробка унікальної ERP системи">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Кожен <br />важливий</strong>
            <strong style={{fontSize:'30px'}}> Лідерство тут,<br /> щоб служити</strong>
            <strong style={{fontSize:'30px'}}> Стійкий</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Розробка індивідуальних систем ERP (Enterprise Resource Planning), які оптимізують ваші бізнес-операції, покращують зв’язок між відділами та автоматизують процеси. <br /><br />
            Наші ERP-рішення адаптовані до унікальних потреб вашого бізнесу та можуть бути інтегровані з іншими програмними рішеннями для створення комплексної системи управління бізнесом.
          <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab_d" eventKey="longer-tab" title="Розробка інтернет-магазину">
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Постійні<br />вдосконалення</strong>
            <strong style={{fontSize:'30px'}}> Якість</strong>
            <strong style={{fontSize:'30px'}}> Ефективність</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо послуги з розробки інтернет-магазину для клієнтів, які хочуть створити онлайн-присутність для свого бізнесу.<br /><br />
            Наша команда може створити та розробити налаштований веб-сайт електронної комерції, який буде простим у використанні та забезпечує безперебійну взаємодію з користувачем.<br /><br />
            Наша мета — допомогти вам збільшити онлайн-продажі, розширити клієнтську базу та покращити загальну ефективність бізнесу.<br /><br />
            Глибоке розуміння та великий досвід дозволяє нам створювати найбільш конверсійні інтернет-магазини для вас.
          <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab_d" eventKey="contact" title="Підтримка та оновлення">
           <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Комунікація</strong>
            <strong style={{fontSize:'30px'}}> Покращення</strong>
            <strong style={{fontSize:'30px'}}> Експертиза</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо постійну підтримку та оновлення, щоб гарантувати, що ваші програмні рішення залишаються актуальними та повністю функціональними. <br /><br />
            Наша команда підтримки завжди готова вирішити будь-які проблеми чи проблеми, що виникають, тому ми надаємо регулярні оновлення для покращення продуктивності та додаємо нові функції, якщо це необхідно. <br /><br />
            Наша мета — забезпечити нашим клієнтам душевний спокій і забезпечити, щоб їхні програмні рішення з часом відповідали їхнім потребам.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab_d" eventKey="bot" title="Розробка ботів">
             <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Автоматизація</strong>
            <strong style={{fontSize:'30px'}}> Інновації</strong>
            <strong style={{fontSize:'30px'}}> Якість</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми спеціалізуємося на розробці індивідуальних ботів, які можуть автоматизувати завдання та підвищити ефективність. <br /><br />
            Ми можемо створювати ботів для широкого спектру програм, включаючи обслуговування клієнтів, соціальні мережі та продажі тощо. <br /><br />
            Наша мета — надати вам передову технологію, яка покращує продуктивність і покращує взаємодію з клієнтами.
            <div class="text-center d-grid col-3 " style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
          <Tab className="tab_d" eventKey="site" title="Перенесення сайту">
             <div style={{display:'flex', justifyContent:'space-between'}}>
            <strong style={{fontSize:'30px'}}> Навички</strong>
            <strong style={{fontSize:'30px'}}> Досвід</strong>
            <strong style={{fontSize:'30px'}}> Результат</strong>
          </div>
            <hr style={{width: '100%'}}/>
            Ми пропонуємо послуги перенесення веб-сайту для клієнтів, які хочуть перенести свій веб-сайт з однієї платформи на іншу. <br /><br />
            Наша команда розробників може гарантувати, що перехід буде плавним і бездоганним, а веб-сайт залишатиметься повністю функціональним протягом усього процесу. <br /><br />
            Наша мета полягає в тому, щоб звести до мінімуму будь-які збої в онлайн-присутності наших клієнтів і гарантувати, що їхній веб-сайт продовжує відповідати їхнім бізнес-потребам.
            <div class="text-center d-grid col-3" style={{margin: '30px 20px 0px 0px', backgroundColor: 'black'}} ><Button href="#zamov" variant="light" size="lg"><b>Хочу</b></Button>{' '}</div>
          </Tab>
        </Tabs>
      </div>
      </DesktopBreakpoint>
    </div>
  );
}

export default FillExample;