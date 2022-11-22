
import '../../style/services/services.css';
import { useTranslation } from 'react-i18next';
import backgroundServices from '../../assets/Fondos/fondo-services.png';
import fingerprint from '../../assets/Huella/huella-servicios.png';
import { dataServices } from '../../data/services';
import { useNavigation } from "react-router-dom";
import { WhatsAppFloat } from '../Icons/WhatsAppFloat';

export const Services = ({ dark }) => {
    const [t] = useTranslation("global");

    return (
        <>
            <img 
                className='w-100 background-services' 
                src={backgroundServices} 
                alt="background" 
            />
            <section
                id='services'
                className='services text-center mb-5'
            >
                <h1 className='p-5'>
                    { t("Services.title") }
                </h1>

                <div className='d-flex flex-wrap align-items-center justify-content-center'>
                {
                    dataServices.map( i =>(
                        <div 
                            key={ i.index }
                            className='services-items d-flex flex-column align-items-center justify-content-start'
                        >
                            <div>
                                <img
                                    className='fingerprint-img-services'
                                    src={fingerprint} 
                                />

                                <h4
                                    // className='d-flex flex-column justify-content-center'
                                >
                                    { t(`Services.service${i.index}.title`) }
                                </h4>
                            </div>
        
                            <div className='service-description'>
                                {
                                    i.nItems.map(item => (
                                        <p
                                            // className='d-flex flex-column align-items-center justify-content-center'
                                            key={item}
                                        >
                                            { t(`Services.service${i.index}.descr${item}`) }
                                        </p>
                                    ))
                                }
                            </div>
                            {/* <a href={`services#${i.id}`}>
                                <button 
                                    className='btn-services'
                                >
                                    + info
                                </button>
                            </a> */}
                    </div>
                    ))
                }
                </div>
            </section>
        </>
    );
};
