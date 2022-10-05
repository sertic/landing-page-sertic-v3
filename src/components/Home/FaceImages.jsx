
// import sliderImages from '../../assets/Imagenes Empleados/slider.png';
import Slider from 'react-slick';
import { members } from '../../data/members';
import { CustomNextArrow } from '../Carousel/CustomNextArrow';
import { NullArrow } from '../Carousel/NullArrow';
import { Members } from './Members';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <NullArrow />,
  nextArrow: <CustomNextArrow />
};

export const FaceImages = () => {
  return (
    <div
      className='w-50'
    >   
      <Slider 
        {...settings}
      >
        {
          members.map(({ sector, list })=>(
          <Members 
            sector={ sector }
            members={ list }
          />
          ))
        }
      </Slider>
    </div>
  )
}