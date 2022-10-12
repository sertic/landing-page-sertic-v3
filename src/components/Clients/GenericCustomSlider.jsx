
import '../../style/clients.css';
import Slider from 'react-slick';
import { CustomCarousel } from '../Carousel/CustomCarousel';

console.log(window.innerWidth);

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
      className='clients'
    >
        <h1
          className='d-flex justify-content-center mt-5'
        >
            { title }
        </h1>
        <CustomCarousel 
          children={children}
        />
    </div>
  );
}

