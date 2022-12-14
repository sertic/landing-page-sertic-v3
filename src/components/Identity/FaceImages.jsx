
// import sliderImages from '../../assets/Imagenes Empleados/slider.png';
import fingerprintLogo from '../../assets/Huella Logo/huella-logo.png';
import Slider from 'react-slick';
import { members } from '../../data/members';
import { CustomNextArrow } from '../Carousel/Arrows/CustomNextArrow';
import { FaceArrow } from '../Carousel/Arrows/FaceArrow';
import { NullArrow } from '../Carousel/Arrows/NullArrow';
import { Members } from './Members';

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <NullArrow />,
  nextArrow: <FaceArrow />
};

export const FaceImages = () => {
  return (
    <>
        <div
          className='list-members'
        >   
          <img
            className='fingerprint-logo-wallpaper'
            src={fingerprintLogo}
            alt='huella-logo-wallpaper'
          />
          <Slider 
            {...settings}
          >
            {
              members.map(({ index,sector, list })=>(
                <Members 
                  key={ index }
                  index={ index }
                  sector={ sector }
                  members={ list }
                />
              ))
            }
          </Slider>
        </div>
    </>
  )
}