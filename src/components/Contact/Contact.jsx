
import { ContactInfo } from './ContactInfo';
import { ContactMap } from './ContactMap';
import { ContactSendMail } from './ContactSendMail';
import backgroundServices from '../../assets/Fondos/foto contacto-12.png';
import '../../style/contact/info.css';
import '../../style/contact/contact.css';

export const Contact = () => {
  return (
    <>
      <img 
          className='w-100 background-contact' 
          src={backgroundServices}
          alt="background" 
      />
      <section
          id='contact'
          className='contact d-flex flex-row'
      >
        <div
          className='d-flex justify-content-around align-items-center'
          style={{width:'100vw'}}
        >
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
        </div>
        {/* <WhatsAppFloat /> */}
    </section>
    </>
  );
};
