import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CustomNextArrow = ({ onClick }) =>{
    return(
        <div>
            <FontAwesomeIcon 
                className='arrow'
                icon={faArrowRight} 
                onClick={onClick}
            />
        </div>
    )
}