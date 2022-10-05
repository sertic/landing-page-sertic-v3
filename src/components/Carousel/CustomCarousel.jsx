import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { ReturnClient } from '../Clients/ReturnClient';
import  {clients}  from '../../data/clients';
import { CustomPrevArrow } from './CustomPrevArrow';
import { CustomNextArrow } from './CustomNextArrow';

console.log(window.innerWidth);

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: window.innerWidth > 1200 ? 3 : 2,
  slidesToScroll: 3,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 2000,
  prevArrow: <CustomPrevArrow />,
  nextArrow: <CustomNextArrow />
};

export const CustomCarousel = ({children, dark, data}) => {

  const [t] = useTranslation("global");

  return (
      <Slider {...settings}>
        { children }
      </Slider>
  );
}