import { useTranslation } from 'react-i18next';
import '../../style/navbar/navbar.css';
import serticLogo from '../../assets/Logo/nuevo-logo-1.png'
import serticLogoHover from '../../assets/Logo/nuevo-logo-1-celeste.png'
import { Nav, Navbar } from 'react-bootstrap';
import { NavbarOffcanva } from './NavbarOffcanva';
import { NavbarSetLanguage } from './NavbarSetLanguage';
import { NavbarDarkLightButton } from './NavbarDarkLightButton';
import { CurrentIcons } from '../Icons/CurrentIcons';
import { LinkedinIcons } from '../Icons/LinkedinIcons';
import { useState } from 'react';


export const NavBar = ({ theme, setTheme }) => {

const [logo, setLogo] = useState(serticLogo);
const [t] = useTranslation('global');

return (
  <>
    <Navbar
      id='home'
      className={`navbar1 ${theme ? 'navbar1-dark' : 'navbar1-light'} justify-content-between p-2 align-items-center`} 
    >
        <Nav.Item
            className='language-darklight d-flex align-items-center'
        >
            <NavbarDarkLightButton 
              theme={ theme }
              setTheme={ setTheme }
            />
            <NavbarSetLanguage />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link 
              href='/home#home'
              className='sertic-logo'
              onMouseOver={ () => setLogo(serticLogoHover) }
              onMouseOut={ ()=> setLogo(serticLogo) }
            >
              <img 
                src={ logo } 
                alt='sertic-logo'
              />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='https://www.sertic.com.ar/glpi/'>
                <h2
                  className='btn assistance-btn'
                >
                  {t('Assistance.title')}
                </h2>
            </Nav.Link>
        </Nav.Item>
    </Navbar>
    <Navbar
      className='navbar2 justify-content-between align-items-center' 
      variant='dark'
      expand={false}
      style={{'backgroundColor':'#4D4D4D'}}
    >
            <NavbarOffcanva t={t} theme={theme} />
            <div
              className='navbar-icons d-flex justify-content-center'
            >
                <CurrentIcons />
                <LinkedinIcons />
            </div>
    </Navbar>
  </>
)
}
