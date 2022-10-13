import { Contact } from "../components/Contact/Contact";
import { Identity } from "../components/Identity/Identity";
import { Services } from "../components/Services/Services";
import '../style/clients-partners.css'
import { ClientsPartners } from "../components/Clients&Partners/ClientsPartners";

export const HomePage = () =>{
    return(
        <div
            // id='home'
        >
            <Identity />
            <Services />
            <ClientsPartners />
            <Contact />
        </div>
    )
}