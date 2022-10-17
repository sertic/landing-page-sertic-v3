import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import lightImg  from '../../assets/Icono Noche Dia/dia.png';
import darkImg from '../../assets/Icono Noche Dia/noche.png';

export const NavbarDarkLightButton = () => {
    const [theme, setTheme] = useState(true)

    const onHandleSetTheme = () => {
        setTheme( state => !state )
        localStorage.setItem('theme', theme);
    }

    return (
        <Nav.Link
        className='light-dark-icon hover'
        onClick={ onHandleSetTheme }
        >
            <img 
            className='dark'
            src={ darkImg } 
            alt='dark'
            />
            <img 
            className='light'
            src={ lightImg } 
            alt='light' 
            />
        </Nav.Link>
    )
}

