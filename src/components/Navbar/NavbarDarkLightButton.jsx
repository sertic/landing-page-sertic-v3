import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import sunImgDefault  from '../../assets/Icono Noche Dia/dia.png';
import sunImgHover  from '../../assets/Icono Noche Dia/dia-hover.png';
import moonImg from '../../assets/Icono Noche Dia/noche.png';

export const NavbarDarkLightButton = () => {
    const [theme, setTheme] = useState(true);
    const [sunImg, setSunImg] = useState(sunImgDefault)

    const onHandleSetTheme = () => {
        setTheme( state => !state )
        localStorage.setItem('theme', theme);
    }

    return (
        
        <Nav.Link
            className='sun-moon-navlink hover'
            onClick={ onHandleSetTheme }
        >
        <div
            className='sun-moon-icon'
            onMouseOver={ () => setSunImg(sunImgHover) }
            onMouseOut={ ()=> setSunImg(sunImgDefault) }
        >
            <img 
                className='moon'
                src={ moonImg } 
                alt='moon'
                />
            <img 
                className='sun'
                src={ sunImg } 
                alt='sun' 
                />
                </div>
        </Nav.Link>
    )
}

