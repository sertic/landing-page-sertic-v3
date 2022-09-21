import React from 'react';
import '../../css/servicios.css';
import { ReturnService } from './ReturnService';
import { faBriefcase, faCloud, faCode, faServer, faWrench } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

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
    console.log( t("services.services1.descr[0]") );
  
  return (
    <div id='servicios'>
      <section className='text-center'>
            <h1 
                className='m-5'
            >
                { t("services.title") }
            </h1>

            <div className='d-flex flex-wrap justify-content-center'>

            {
                data.map( i =>(
                    <ReturnService 
                        dark={ dark }
                        title={ t(`services.service${i.index}.title`) }
                        key={ i.index }
                        icon={ i.icon }
                        description={
                        <div
                            className='service-box-content blockquote'
                        >
                            {
                                i.nItems.map(item => (
                                    <p
                                        key={item}
                                    >
                                        { t(`services.service${i.index}.descr${item}`) }
                                    </p>
                                ))
                            }
                        </div>
                        }
                    />
                ))
            }


            </div>
      </section>
    </div>
  );
};
