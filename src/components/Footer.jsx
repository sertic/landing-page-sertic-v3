import React from 'react';
// import '../css/footer.css';
import { faMapMarkedAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

    const [t] = useTranslation("global");

  return (
    <>
    <div className='footer-above'>
            <div className='footer-columns'> 
                <h3> 
                    <FontAwesomeIcon icon={faMapMarkedAlt} className='icons' />
                    { t("Footer.location") }
                    <hr color='#1ce'/>
                </h3>
                <p className='footer-info'>Italia 1352 <br/> S2000 DFB, Rosario. Argentina </p>
            </div>

            <div className='footer-columns'>
                <h3> 
                    <FontAwesomeIcon icon={faPhoneAlt} className='icons' />
                    { t("Footer.phone") } 
                    <hr color='#1ce'/>
                </h3>
                
                <p className='footer-info'> +543415282575 / +5493416932434 </p>
            </div>

            <div className='footer-columns'>
                <h3> 
                    <FontAwesomeIcon icon={faEnvelope} className='icons' />
                    { t("Footer.email") }
                    <hr color='#1ce'/>
                </h3>
                <p className='footer-info'>contacto@sertic.com.ar</p>
            </div>
        </div>

        <div className='footer-below'>
            <p>Copyright © SerTIC 2022. All Rights Reserved</p>
        </div>
    </>
  );
};
