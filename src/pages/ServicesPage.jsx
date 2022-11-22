import { useTranslation } from "react-i18next";
import { ReturnService } from "../components/Services/ServicePage/ReturnService";
import { dataServices } from "../data/services";
import serviceImgBackground1 from '../assets/Fondos/service-1.png';
import serviceImgBackground2 from '../assets/Fondos/service-2.png';
import serviceImgBackground3 from '../assets/Fondos/service-3.png';

export const ServicesPage = () =>{
    const [t] = useTranslation("global");
    
    return(
        <>
            <div
                className='service-background'
            >
                <img className='service-background-1' src={ serviceImgBackground1 } alt="" />
                <img className='service-background-2' src={ serviceImgBackground2 } alt="" />
                <img className='service-background-3' src={ serviceImgBackground3 } alt="" />
            </div>
            <div
                className='m-5 services-page'
            >

                <h1
                    className='m-5 '
                >{ t("Services.title") }</h1>
                {
                    dataServices.map( ({index, img, nTexts, id, side}) =>(
                            <ReturnService
                                side={ side }
                                key={ id } 
                                id={ id }
                                img={ img } 
                                index={ index} 
                                title={ t(`Services.service${index}.title`) }
                                texts={ nTexts.map( txt => t(`Services.service${index}.texts.${txt}`) ) }
                            />
                    ))
                }
            </div>
        </>
    )
}