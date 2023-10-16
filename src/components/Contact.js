import React, { useState } from 'react';
import './Contact.css'
import DesktopBreakpoint from '../components/desktop_breakpoint';
import PhoneBreakpoint from '../components/phone_breakpoint';
import Button from 'react-bootstrap/Button';


function ContactUsBlock() {
  const [contactMethod, setContactMethod] = useState('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    whatsapp: '',
    viber: '',
    message: '',
  });

  const handleContactMethodChange = (e) => {
    setContactMethod(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const renderContactFields = () => {
    switch (contactMethod) {

      case 'email':
        return (
          <>
          <DesktopBreakpoint>
            <div className="form-group">
              <label className="l_d" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            </DesktopBreakpoint>
            <PhoneBreakpoint>
            <div className="form-group">
              <label className="l_p" htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            </PhoneBreakpoint>
          </>
        );
      case 'telegram':
        return (
          <>
          <DesktopBreakpoint>
            <div className="form-group">
              <label className="l_d" htmlFor="telegram">Нік тг:</label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                required
              />
            </div>
            </DesktopBreakpoint>
            <PhoneBreakpoint>
            <div className="form-group">
              <label className="l_p" htmlFor="telegram">Нік тг:</label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                required
              />
            </div>
            </PhoneBreakpoint>
          </>
        );
      case 'whatsapp':
        return (
          <>
          <DesktopBreakpoint>
            <div className="form-group">
              <label className="l_d" htmlFor="whatsapp">Номер WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
            </DesktopBreakpoint>
            <PhoneBreakpoint>
            <div className="form-group">
              <label className="l_p" htmlFor="whatsapp">Номер WhatsApp:</label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
              />
            </div>
            </PhoneBreakpoint>
          </>
        );
      case 'viber':
        return (
          <>
          <DesktopBreakpoint>
            <div className="form-group">
              <label className="l_d" htmlFor="viber">Номер Viber:</label>
              <input
                type="text"
                id="viber"
                name="viber"
                value={formData.viber}
                onChange={handleChange}
                required
              />
            </div>
            </DesktopBreakpoint>
            <PhoneBreakpoint>
            <div className="form-group">
              <label className="l_p" htmlFor="viber">Номер Viber:</label>
              <input
                type="text"
                id="viber"
                name="viber"
                value={formData.viber}
                onChange={handleChange}
                required
              />
            </div>
            </PhoneBreakpoint>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="all_f">
      <DesktopBreakpoint> 
      <div id="zamov" className="contact-us-block_d">
        <div  className='d_con'>
        <h2 className='h_d'>Зв'яжіться з нами</h2>
        <p className='p_d'>Оберіть спосіб зв'язку та залиште свої контактні дані та повідомлення:</p>
        <div className="contact-method">
          <label className="l_d">
            <select value={contactMethod} onChange={handleContactMethodChange}>
              <option value="email">Email</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="viber">Viber</option>
            </select>
          </label>
        </div>
        <form>
          <div className="form-group">
            <label className="l_d" htmlFor="name">Ім'я:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {renderContactFields()}
          <div className="form-group">
            <label className="l_d" htmlFor="message">Повідомлення:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
         <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 0px 10px 0px', backgroundColor: 'white'}} ><Button style={{color:'black'}}variant="info" size="lg"><b>Хочу</b></Button>{' '}</div>
        </form>
        </div>
        </div>
        </DesktopBreakpoint>
        <PhoneBreakpoint>
        <div id="zamov" className="contact-us-block_p">
        <div  className='p_con'>
        <h2 className='h_p'>Зв'яжіться з нами</h2>
        <p className='p_p'>Оберіть спосіб зв'язку та залиште свої контактні дані та повідомлення:</p>
        <div className="contact-method">
          <label className="l_p">
            <select value={contactMethod} onChange={handleContactMethodChange}>
              <option value="email">Email</option>
              <option value="telegram">Telegram</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="viber">Viber</option>
            </select>
          </label>
        </div>
        <form>
          <div className="form-group">
            <label className="l_p" htmlFor="name">Ім'я:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          {renderContactFields()}
          <div className="form-group">
            <label className="l_p" htmlFor="message">Повідомлення:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div class="text-center d-grid col-4 mx-auto" style={{margin: '30px 0px 10px 0px', backgroundColor: 'white'}} ><Button style={{color:'black'}}variant="info" size="sm"><b>Хочу</b></Button>{' '}</div>
        </form>
        </div>
        </div>
        </PhoneBreakpoint>
    </div>
  );
}

export default ContactUsBlock;
