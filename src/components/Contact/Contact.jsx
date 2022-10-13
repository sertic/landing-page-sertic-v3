
import { ReturnContact } from './ReturnContact';
import { ReturnMap } from './ReturnMap';
import { ReturnSendMail } from './ReturnSendMail';
import backgroundServices from '../../assets/Fondos/foto contacto-12.png';
import '../../style/contact.css';
import '../../style/info.css';

export const Contact = () => {
  return (
    <>
      <img 
          className='w-100 background-contact' 
          src={backgroundServices}
          alt="background" 
      />
      <section
          className='contact d-flex flex-row'
      >
        <div
          className='d-flex justify-content-around align-items-center'
          style={{width:'100vw'}}
        >
          <div
            className='sendemail'
          >
            <ReturnSendMail />
          </div>
          <div
            className='info d-flex flex-column justify-content-between'
          >
            <ReturnMap />
            <ReturnContact />
          </div>
        </div>
        {/* <WhatsAppFloat /> */}
    </section>
    </>
  );
};
