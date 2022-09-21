import React, { useState } from 'react';
import '../style/navbar.css';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import lightImg  from '../assets/icono-noche-dia/dia.png';
import darkImg from '../assets/icono-noche-dia/noche.png';
import serticLogo from '../assets/logo/nuevo-logo-1.png'
import { Nav, Navbar, Button } from 'react-bootstrap';

export const NavBar = ({ setDark }) => {

  const [t, i18n] = useTranslation("global");
  const { changeLanguage } = i18n;
  const [showNavBar, setShowNavBar] = useState('collapse navbar-collapse')
  
  const setLanguage = ( language ) =>{
    changeLanguage( language );
    localStorage.setItem('language', language);
    show();
  };

  const setTheme = () => {
    setDark( state => !state )
    // localStorage.setItem('theme', theme);
    show();
  }
 
  const show = () =>{

    if( showNavBar === 'collapse navbar-collapse' ){
      setShowNavBar('collapse navbar-collapse show')
    }
    else
    {
      setShowNavBar('collapse navbar-collapse')
    }

  }


return (
  <>
    <Navbar
      className="navbar justify-content-between p-2 align-items-center" 
    >
        <Nav.Item
            className='d-flex'
        >
            <Nav.Link
                className='light-dark-icon hover'
                onClick={ setTheme }
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

        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/home">
              <img 
                className='sertic-logo'
                src={ serticLogo } 
                alt='sertic-logo'
              />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/asistencia">
                <h2
                  className='btn'
                >
                  Asistencia
                </h2>
            </Nav.Link>
        </Nav.Item>
    </Navbar>
    <Navbar
      className="navbar justify-content-between align-items-center" 
      variant="dark"
      style={{'backgroundColor':'#4D4D4D'}}
    >
            <Navbar.Toggle 
              className='d-flex mx-4'
              aria-controls={`offcanvasNavbar-expand-xl`} 
              style={{'border':'none'}}
              as={'div'}
            />
            <Navbar.Offcanvas
              className=''
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="start"
            ></Navbar.Offcanvas>
            <div>
                <img alt='linkedin-icon'/>
                <img alt='google-currents-icon'/>
            </div>
    </Navbar>
  </>
)
}
