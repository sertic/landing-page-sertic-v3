import '../../style/contact-info.css';
import { useTranslation } from 'react-i18next';

export const ReturnContact = () => {
    const [t] = useTranslation("global");
    return (
        <div
            className='contact-info d-flex flex-column justify-content-center px-5 py-2'
        >
            <h3>
                { t("ContactInfo.title") }
            </h3>
            <div
                className='my-2'
            >
                <p>
                    { t("ContactInfo.email") }:
                </p>
                <b>
                    contacto@sertic.com.ar
                </b>
            </div>
            <div
                className='my-2'
            >
                <p>
                { t("ContactInfo.phone") }:
                </p>
                <b>
                    + 54 9 341 528-2575 / (15)6932434
                </b>
            </div>
            <div
                className='my-2'
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