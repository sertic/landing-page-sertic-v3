import React, { useState } from 'react';
import '../style/navbar.css';
import { useTranslation } from 'react-i18next';
import lightImg  from '../assets/Icono Noche Dia/dia.png';
import darkImg from '../assets/Icono Noche Dia/noche.png';
import serticLogo from '../assets/Logo/nuevo-logo-1.png'
import { Nav, Navbar, Button, Offcanvas } from 'react-bootstrap';
import { LinkedinCurrentIcons } from '../Icons/LinkedinCurrentIcons';


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
                  {t('Assistance.title')}
                </h2>
            </Nav.Link>
        </Nav.Item>
    </Navbar>
    <Navbar
      className="navbar justify-content-between align-items-center" 
      variant="dark"
      expand={false}
      style={{'backgroundColor':'#4D4D4D'}}
    >
            <Navbar.Toggle 
              className='d-flex mx-4'
              aria-controls={`offcanvasNavbar-expand-xl`} 
              style={{'border':'none'}}
              as={'div'}
            />
            <Navbar.Offcanvas
              className='d-flex flex-column px-5'
              id={`offcanvasNavbar-expand-xl`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href='#ouridentity'>{t('Sections.ourIdentity')}</Nav.Link>
                  <Nav.Link href='#services'>{t('Sections.services')}</Nav.Link>
                  <Nav.Link href='#clients'>{t('Sections.clients')}</Nav.Link>
                  <Nav.Link href='#partners'>{t('Sections.partners')}</Nav.Link>
                  <Nav.Link href='#contact'>{t('Sections.contact')}</Nav.Link>
                  <Nav.Link href='#assistance'>{t('Sections.assistance')}</Nav.Link>
                  <Nav.Link href='#workWithUs'>{t('Sections.workWithUs')}</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div
              className='mx-2'
            >
              <LinkedinCurrentIcons />
            </div>
    </Navbar>
  </>
)
}
