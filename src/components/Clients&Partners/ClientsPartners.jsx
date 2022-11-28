
import '../../style/clientsAndPartners/clients-partners.css';
import { Clients } from './Clients/Clients';
import { Partners } from './Partners/Partners';


export const ClientsPartners = () =>{
    return(
        <section
            className='background-theme mb-5 d-flex flex-column justify-content-around'
        >
            <Clients />
            {/* <Partners /> */}
        </section>
    )
}