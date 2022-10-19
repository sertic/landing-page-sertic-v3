
import '../../style/services/services.css';
import { useTranslation } from 'react-i18next';
import backgroundServices from '../../assets/Fondos/fondo-services.png';
import fingerprint from '../../assets/Huella/huella-servicios.png';
import { dataServices } from '../../data/services';
import { useNavigation } from "react-router-dom";

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

                <div className='d-flex flex-wrap justify-content-center'>
                {
                    dataServices.map( i =>(
                        <div 
                            className='w-25 m-3 d-flex flex-column align-items-center justify-content-between'
                        // style={
                        //         dark
                        //           ?
                        //         {'backgroundColor':'#3F3F3F'}   
                        //           :
                        //         {'backgroundColor':'#f1f1f1'}   
                        // }
                        >
                            
                            <img
                                className='fingerprint-img-services'
                                src={fingerprint} 
                            />

                            <h4>
                                { t(`Services.service${i.index}.title`) }
                            </h4>
        
                            <div className='mb-3'>
                                {
                                    i.nItems.map(item => (
                                        <p
                                            className='d-flex flex-column align-items-center justify-content-center'
                                            key={item}
                                        >
                                            { t(`Services.service${i.index}.descr${item}`) }
                                        </p>
                                    ))
                                }
                            </div>
                            <a href={`services#${i.id}`}>
                                <button 
                                    className='btn-services'
                                >
                                    + info
                                </button>
                            </a>
                    </div>
                    ))
                }
                </div>
            </section>
        </>
    );
};
