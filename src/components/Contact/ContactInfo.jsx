import '../../style/contact/contact-info.css';
import { useTranslation } from 'react-i18next';

export const ContactInfo = () => {
    const [t] = useTranslation("global");
    return (
        <div
            className='contact-info d-flex flex-column justify-content-around px-5 py-5'
        >
            <h3>
                { t("ContactInfo.title") }
            </h3>
            <div>
                <p>
                    { t("ContactInfo.email") }:
                </p>
                <b>
                    contacto@sertic.com.ar
                </b>
            </div>
            <div
            >
                <p>
                { t("ContactInfo.phone") }:
                </p>
                <b>
                    + 54 9 341 528-2575 / (15)6932434
                </b>
            </div>
            <div
            >
                <p>
                    { t("ContactInfo.address") }:
                </p>
                <b>
                    Urquiza 1285 PA S2000ANI - Rosario - Argentina
                </b>
            </div>
        </div>
    );
};