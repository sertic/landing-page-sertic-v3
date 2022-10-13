import { useTranslation } from "react-i18next";
import { clients } from "../../../data/clients";
import { GenericCustomSlider } from "../../Carousel/GenericCustomSlider";
import { ReturnPartner } from "./ReturnPartner";

export const Partners = () => {
    const [t] = useTranslation('global');

    return(
        <div>
            <GenericCustomSlider
                title={ t('Partners.title') }
                id='partners'
                children={
                    clients.map( ({ link, img, name }) =>(
                        <ReturnPartner
                            key  = { link }
                            link = { link }
                            img  = { img } 
                            name = { name }
                        />
                    ))    
                }
            />
        </div>
    )
}