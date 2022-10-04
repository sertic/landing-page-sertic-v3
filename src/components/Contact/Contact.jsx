
import { ReturnContact } from './ReturnContact';
import { ReturnMap } from './ReturnMap';

export const Contact = () => {
  return (
    <div
      className='h-100 d-flex justify-content-around align-items-center'
    >
      <ReturnMap />
      <ReturnContact />
    </div>
  );
};
