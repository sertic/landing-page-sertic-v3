
import '../../style/services.css';
import { faBriefcase, faCloud, faCode, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import backgroundServices from '../../assets/Fondos/fondo-services.png';
import fingerprint from '../../assets/Huella/huella-servicios.png';

const data = [
    {
        index:1,
        icon: faCloud,
        nItems:[1,2,3,4]
    },
    {
        index:2,
        icon: faWrench,
        nItems:[1,2,3,4]
    },
    {
        index:3,
        icon: faBriefcase,
        nItems:[1,2]
    },
    {
        index:4,
        icon: faServer,
        nItems:[1,2,3]
    },
    {
        index:5,
        icon: faCode,
        nItems:[1,2]
    }
]

export const Services = ({ dark }) => {

    const [t] = useTranslation("global");
  
    return (
        <div className='my-5'>
            <img 
                className='w-100 background-services' 
                src={backgroundServices} 
                alt="background" 
            />
            <section className='text-center my-5'>
                <h1 
                    className='p-5'
                >
                    { t("services.title") }
                </h1>

                <div className='d-flex flex-wrap justify-content-center align-items-center'>

                {
                    data.map( i =>(
                        <div 
                        className='d-flex flex-column'
                        // style={
                        //         dark
                        //           ?
                        //         {'backgroundColor':'#3F3F3F'}   
                        //           :
                        //         {'backgroundColor':'#f1f1f1'}   
                        // }
                    >
                        <div
                            className='mb-2 service-box-description d-flex flex-column align-items-center justify-content-around'
                        >
                            <span>
                                <img
                                    width='150' 
                                    src={fingerprint} 
                                />
                            </span>

                            <h2
                                style={{'width':'60%'}}
                            >
                                { t(`services.service${i.index}.title`) }
                            </h2>
                        </div>
                        
                        <div
                                className='blockquote'
                            >
                                {
                                    i.nItems.map(item => (
                                        <p
                                            key={item}
                                            style={{'margin':'0px','width':'400px'}}
                                        >
                                            { t(`services.service${i.index}.descr${item}`) }
                                        </p>
                                    ))
                                }
                            </div>
                    
                    </div>
                        
                    ))
                }


                </div>
        </section>
        </div>
    );
};
