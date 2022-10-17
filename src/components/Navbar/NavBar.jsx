import { useTranslation } from 'react-i18next';
import '../../style/navbar/navbar.css';
import serticLogo from '../../assets/Logo/nuevo-logo-1.png'
import { Nav, Navbar } from 'react-bootstrap';
import { LinkedinCurrentIcons } from '../Icons/LinkedinCurrentIcons';
import { NavbarOffcanva } from './NavbarOffcanva';
import { NavbarSetLanguage } from './NavbarSetLanguage';
import { NavbarDarkLightButton } from './NavbarDarkLightButton';


export const NavBar = ({ setDark }) => {

const [t] = useTranslation('global');

return (
  <>
    <Navbar
      id='home'
      className='navbar justify-content-between p-2 align-items-center' 
    >
        <Nav.Item
            className='d-flex align-items-center'
        >
            {/* <NavbarDarkLightButton /> */}
            {/* <NavbarSetLanguage /> */}
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/home#home'>
              <img 
                className='sertic-logo'
                src={ serticLogo } 
                alt='sertic-logo'
              />
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href='/assistance'>
                <h2
                  className='btn'
                >
                  {t('Assistance.title')}
                </h2>
            </Nav.Link>
        </Nav.Item>
    </Navbar>
    <Navbar
      className='navbar justify-content-between align-items-center' 
      variant='dark'
      expand={false}
      style={{'backgroundColor':'#4D4D4D'}}
    >
            <NavbarOffcanva t={t} />
            <div
              className='mx-5 px-5'
            >
              <LinkedinCurrentIcons />
            </div>
    </Navbar>
  </>
)
}
