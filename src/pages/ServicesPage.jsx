import { useTranslation } from "react-i18next";
import { ReturnService } from "../components/Services/ReturnService";
import { dataServices } from "../data/services";

export const ServicesPage = () =>{
    const [t] = useTranslation("global");
    
    return(
        <div
            className='m-5'
        >
            <h1
                className='my-5 '
            >{ t("Services.title") }</h1>
            {
                dataServices.map( ({index, img, nTexts, id}) =>(
                        <ReturnService
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
    )
}