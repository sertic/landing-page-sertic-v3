
import '../../style/clients-partners.css';
import { Clients } from './Clients/Clients';
import { Partners } from './Partners/Partners';


export const ClientsPartners = () =>{
    return(
        <section
            className='mb-5 d-flex flex-column justify-content-around'
        >
            <Clients />
            <Partners />
        </section>
    )
}