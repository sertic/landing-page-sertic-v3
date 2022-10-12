
import '../style/footer.css';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import serticLogo from '../assets/Logo/nuevo-logo-2.png';
import { LinkedinCurrentIcons } from './Icons/LinkedinCurrentIcons';

export const Footer = () => {

    const [t] = useTranslation("global");

    return (
        <>
            <div className='footer1 pt-5'>
                <div
                    className='d-flex justify-content-between'
                >
                    <div
                        className='d-flex flex-column px-5'
                    >
                        <a href='#home' >{t('Sections.home')}</a>
                        <a href='#services' >{t('Sections.services')}</a>
                        <a href='#clients' >{t('Sections.clients')}</a>
                        <a href='#partners' >{t('Sections.partners')}</a>
                        <a href='#contact' >{t('Sections.contact')}</a>
                        <a href='#assistance' >{t('Sections.assistance')}</a>
                        <a href='#workWithUs' >{t('Sections.workWithUs')}</a>
                    </div>
                    <div
                        className='me-5 d-flex justify-content-center align-items-start'
                    >
                        <img 
                            className='footer-logo'
                            src={serticLogo} 
                            alt='Logo SerTIC' 
                        />
                    </div>
                    <div
                        className='px-5 d-flex flex-column align-items-center justify-content-around'
                    >
                        <LinkedinCurrentIcons />
                        <a href="#home">
                            <FontAwesomeIcon
                                className='arrow'
                                icon={faArrowUp} 
                            />
                        </a>
                    </div>
                </div>

                <div
                    className='d-flex justify-content-center align-items-center pb-1'
                >
                    <p>{t('Footer.design')}</p>
                    <a 
                        href='https://www.instagram.com/ciruelodisdigital/'
                        target='blanck'
                    >ciruelodisdigital</a>
                </div>
            </div>
            <div className='footer2 d-flex justify-content-center'>
                <p>{t('Footer.rights')}</p>
            </div>
        </>
    );
};
