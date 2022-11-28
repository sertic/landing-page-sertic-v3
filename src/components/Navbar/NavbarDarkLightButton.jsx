import { useState } from 'react';
import { Nav } from 'react-bootstrap';
import sunImgDefault  from '../../assets/Icono Noche Dia/dia.png';
import sunImgHover  from '../../assets/Icono Noche Dia/dia-hover.png';
import moonImg from '../../assets/Icono Noche Dia/noche.png';

export const NavbarDarkLightButton = ({ theme, setTheme }) => {
    const [sunImg, setSunImg] = useState(sunImgDefault)

    const onHandleSetTheme = () => {
        setTheme( state => !state )
        localStorage.setItem('theme', theme);
    }

    return (
        
        <Nav.Link
            className='sun-moon-icon hover'
        >
        <div
            className='sun-moon-icon hover'
            onMouseOver={ () => setSunImg(sunImgHover) }
            onMouseOut={ ()=> setSunImg(sunImgDefault) }
            onClick={ onHandleSetTheme }
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

