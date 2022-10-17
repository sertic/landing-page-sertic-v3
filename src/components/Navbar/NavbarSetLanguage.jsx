import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

export const NavbarSetLanguage = () => {
    const [t, i18n] = useTranslation('global');
    const { changeLanguage } = i18n;

    const setLanguage = ( language ) =>{
        changeLanguage( language );
        localStorage.setItem('language', language);
    };

    return (
        <div>
            <Nav.Link
                className='language d-flex align-items-center hover'
            >    
                <p
                    onClick={ ()=> setLanguage('es') }
                >ES</p>
                /
                <p
                    onClick={ ()=> setLanguage('en') }
                >EN</p>
            </Nav.Link>
        </div>
    )
}

