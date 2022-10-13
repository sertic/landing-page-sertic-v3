import '../../style/footer.css';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import serticLogo from '../../assets/Logo/nuevo-logo-2.png';
import { LinkedinCurrentIcons } from '../Icons/LinkedinCurrentIcons';

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
                        <a href='#ouridentity' >{t('Footer.sections.ourIdentity')}</a>
                        <a href='#services' >{t('Footer.sections.services')}</a>
                        <a href='#clients' >{t('Footer.sections.clients')}</a>
                        <a href='#partners' >{t('Footer.sections.partners')}</a>
                        <a href='#contact' >{t('Footer.sections.contact')}</a>
                        <a href='#assistance' >{t('Footer.sections.assistance')}</a>
                        <a href='#workWithUs' >{t('Footer.sections.workWithUs')}</a>
                    </div>
                    <div
                        className='me-5 d-flex justify-content-center align-items-start'
                    >
                        <a href="home#home">
                            <img 
                                className='footer-logo'
                                src={serticLogo} 
                                alt='Logo SerTIC' 
                            />
                        </a>
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
