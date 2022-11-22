import linkedinIcon from '../../assets/Icons/linkedin.png';

export const LinkedinIcons = ({className}) => {
    return (
        <a 
            href="http://www.linkedin.com/company/sertic-soluciones-informaticas/"
            target='blanck'
        >
            <img 
                alt='linkedin-icon' 
                src={ linkedinIcon } 
                width='30'
                className={` ${className} mx-1`}
            />
        </a>
    )
}
