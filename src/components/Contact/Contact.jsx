
import { ContactInfo } from './ContactInfo';
import { ContactMap } from './ContactMap';
import { ContactSendMail } from './ContactSendMail';
import backgroundServices from '../../assets/Fondos/foto contacto-12.png';
import '../../style/contact/info.css';
import '../../style/contact/contact.css';
import { WhatsAppFloat } from '../Icons/WhatsAppFloat';

export const Contact = () => {
  return (
    <>
      <section
          id='contact'
          className='contact d-flex justify-content-around align-items-center'
          style={{width:'100vw'}}
      >
        <div
          className='background-contact' 
        >
          <img 
              src={backgroundServices}
              alt="background" 
          />
        </div>
          <div
            className='sendemail'
          >
            <ContactSendMail />
          </div>
          <div
            className='info d-flex flex-column justify-content-between'
          >
            <ContactMap />
            <ContactInfo />
          </div>
        <WhatsAppFloat />
    </section>
    </>
  );
};
