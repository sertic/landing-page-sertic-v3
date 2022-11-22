import { useTranslation } from 'react-i18next';
import '../../style/navbar/navbar.css';
import serticLogo from '../../assets/Logo/nuevo-logo-1.png'
import { Nav, Navbar } from 'react-bootstrap';
import { NavbarOffcanva } from './NavbarOffcanva';
import { NavbarSetLanguage } from './NavbarSetLanguage';
import { NavbarDarkLightButton } from './NavbarDarkLightButton';
import { CurrentIcons } from '../Icons/CurrentIcons';
import { LinkedinIcons } from '../Icons/LinkedinIcons';


export const NavBar = ({ setDark }) => {

const [t] = useTranslation('global');

return (
  <>
    <Navbar
      id='home'
      className='navbar1 justify-content-between p-2 align-items-center' 
    >
        <Nav.Item
            className='language-darklight d-flex align-items-center'
        >
            <NavbarDarkLightButton />
            <NavbarSetLanguage />
        </Nav.Item>
        <Nav.Item>
            <Nav.Link 
              href='/home#home'
              className='sertic-logo'
            >
              <img 
                src={ serticLogo } 
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
            <NavbarOffcanva t={t} />
            <div
              className='navbar-icons d-flex justify-content-center'
            >
                {/* <CurrentIcons /> */}
                <LinkedinIcons />
            </div>
    </Navbar>
  </>
)
}
