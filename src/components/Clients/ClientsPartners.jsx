import { GenericCustomSlider } from './GenericCustomSlider';
import { useTranslation } from 'react-i18next';
import { ReturnClient } from '../Clients/ReturnClient';
import  {clients}  from '../../data/clients';
import { ReturnPartner } from './ReturnPartner';

export const ClientsPartners = () => {

    const [t] = useTranslation('global');

    return (
        <section>
                <GenericCustomSlider
                    title={ t('Clients.title') }
                    id='clients'
                    children={
                        clients.map( ({ link, img, name }) =>(
                            <ReturnClient
                                key  = { link }
                                link = { link }
                                img  = { img } 
                                name = { name }
                            />
                        ))    
                    }
                />
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
        </section>
    )
}