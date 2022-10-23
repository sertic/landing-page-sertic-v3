import { Contact } from "../components/Contact/Contact";
import { Identity } from "../components/Identity/Identity";
import { Services } from "../components/Services/Services";
import { ClientsPartners } from "../components/Clients&Partners/ClientsPartners";

export const HomePage = () =>{
    return(
        <div>
                <Identity />
                <Services />
                <ClientsPartners />
                <Contact />
        </div>
    )
}