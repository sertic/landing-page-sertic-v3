
import '../../style/clientsAndPartners/clients-partners.css';
import { CustomCarousel } from '../Carousel/CustomCarousel';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: window.innerWidth > 1200 ? 3 : 2,
  slidesToScroll: 3,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000
};

export const GenericCustomSlider = ({dark, title, id, children}) => {
  return (
    <div 
      id={id} 
      className='carousel'
    >

        <h1
          className='mb-5'
        >
            { title }
        </h1>

        <CustomCarousel 
          children={children}
        />
    </div>
  );
}

