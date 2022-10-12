import '../../style/contact-info.css';

export const ReturnContact = () => {
    return (
        <div
            className='contact-info d-flex flex-column justify-content-center px-5 py-2'
        >
            <h3>
                Escribinos. Llamanos. Visitanos.
            </h3>
            <div
                className='my-2'
            >
                <p>
                    Correo electrónico:
                </p>
                <b>
                    contacto@sertic.com.ar
                </b>
            </div>
            <div
                className='my-2'
            >
                <p>
                    Teléfono:
                </p>
                <b>
                    + 54 9 341 528-2575 / (15)6932434
                </b>
            </div>
            <div
                className='my-2'
            >
                <p>
                    Dirección:
                </p>
                <b>
                    Urquiza 1285 PA S2000ANI - Rosario - Argentina
                </b>
            </div>
        </div>
    );
};