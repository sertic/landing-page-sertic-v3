
import '../style/footer.css';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import serticLogo from '../assets/Logo/nuevo-logo-2.png';

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
                    <a>Nosotros</a>
                    <a>Servicios</a>
                    <a>Clientes</a>
                    <a>Herramientas/Tecnologías</a>
                    <a>Contacto</a>
                    <a>Asistencia</a>
                    <a>Trabaja con nosotros</a>
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
                    <div>
                        <img alt='linkedin-icon'/>
                        <img alt='google-currents-icon'/>
                    </div>
                    <FontAwesomeIcon
                        className='arrow'
                        icon={faArrowUp} 
                        // as={}
                    />
                </div>
            </div>

            <div
                className='d-flex justify-content-center pb-1'
            >
                <p>Diseñado por @ciruelodisdigital</p>
            </div>
        </div>
        <div className='footer2 d-flex justify-content-center'>
            <p>Copyright © SerTIC 2022. All Rights Reserved</p>
        </div>
    </>
  );
};
