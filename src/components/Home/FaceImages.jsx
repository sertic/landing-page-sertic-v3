import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import sliderImages from '../../assets/Imagenes Empleados/slider.png';

export const FaceImages = () => {
  return (
    <div
      className='d-flex flex-column align-items-end w-50'
      style={{'margin-right':'200px'}}
    >   <div
          className='w-75 h-100 d-flex align-items-center justify-content-center'
        >
          <img 
            className='slider'
            width='500'
            height='500'
            // src={ sliderImages }
          />
        </div>
        <FontAwesomeIcon 
          className='arrow'
          icon={faArrowRight} 
        />
    </div>
  )
}