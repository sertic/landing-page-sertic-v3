
import { WhatsAppFloat } from '../WhatsAppFloat';
import { ReturnContact } from './ReturnContact';
import { ReturnMap } from './ReturnMap';

export const Contact = () => {
  return (
    <section
      className='d-flex justify-content-around align-items-center'
    >
      <ReturnMap />
      <ReturnContact />
      <WhatsAppFloat />
    </section>
  );
};
