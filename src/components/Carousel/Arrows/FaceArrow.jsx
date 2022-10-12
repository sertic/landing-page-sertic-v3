import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const FaceArrow = ({ className, onClick }) =>{
    return(
        <div>
            <FontAwesomeIcon 
                className={`${className} arrow arrow-faces`}
                icon={faArrowRight} 
                onClick={onClick}
            />
        </div>
    )
}