
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
        <>
            <img 
                className='w-100 background-services' 
                src={backgroundServices} 
                alt="background" 
            />
            <section className='text-center mb-5'>
                <h1 className='p-5'>
                    { t("Services.title") }
                </h1>

                <div className='d-flex flex-wrap justify-content-center'>
                {
                    data.map( i =>(
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
                                width='150' 
                                src={fingerprint} 
                            />

                            <h4 style={{'width':'350px'}} >
                                { t(`Services.service${i.index}.title`) }
                            </h4>
        
                            <div className='mb-3'>
                                {
                                    i.nItems.map(item => (
                                        <p
                                            className='d-flex flex-column align-items-center justify-content-center'
                                            key={item}
                                            style={{'margin':'0px','width':'400px'}}
                                        >
                                            { t(`Services.service${i.index}.descr${item}`) }
                                        </p>
                                    ))
                                }
                            </div>
                            <button className='btn-services'>
                                + info
                            </button>
                    </div>
                    ))
                }
                </div>
            </section>
        </>
    );
};
