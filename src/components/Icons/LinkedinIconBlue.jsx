import linkedinIcon from '../../assets/Icons/linkedin-icon.png';

const LinkedinIconBlue = ({className}) => {
    return (
        <div
            className={className}
        >
            <img 
                alt='linkedin-icon' 
                src={ linkedinIcon } 
                width='30'
                href='https://'
            />
        </div>
    )
}

export default LinkedinIconBlue
