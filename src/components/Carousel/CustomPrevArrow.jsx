import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CustomPrevArrow = ({ className, onClick }) =>{
    return(
        <div>
            <FontAwesomeIcon 
                className={`${className} arrow`}
                icon={faArrowLeft} 
                onClick={onClick}
            />
        </div>
    )
}