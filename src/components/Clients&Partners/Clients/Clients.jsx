import { useTranslation } from 'react-i18next';
import { ReturnClient } from './ReturnClient';
import {clients}  from '../../../data/clients';
import { GenericCustomSlider } from '../../Carousel/GenericCustomSlider';

export const Clients = () => {
    const [t] = useTranslation('global');

    return (
        <div>
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
        </div>
    )
}