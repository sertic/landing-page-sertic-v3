import { useState } from 'react';
import { Nav, Navbar, Offcanvas } from 'react-bootstrap'

export const NavbarOffcanva = ({t}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar.Toggle 
                className='d-flex mx-4'
                aria-controls={`offcanvasNavbar-expand-xl`} 
                style={{'border':'none'}}
                as={'div'}
                onClick={handleShow}
            />
            <Offcanvas
                show={show}
                onHide={handleClose}
                className='d-flex flex-column px-5'
                id={`offcanvasNavbar-expand-xl`}
                aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
                placement='start'
            >
                <Offcanvas.Header closeButton />
                <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link 
                        href='home#home'
                        onClick={handleClose}
                    >
                        {t('Sections.home')}
                    </Nav.Link>
                    <Nav.Link 
                        href='home#identity'
                        onClick={handleClose}
                    >
                        {t('Sections.ourIdentity')}
                    </Nav.Link>
                    <Nav.Link 
                        href='home#services'
                        onClick={handleClose}
                    >
                        {t('Sections.services')}
                    </Nav.Link>
                    <Nav.Link 
                        href='home#clients'
                        onClick={handleClose}
                    >
                        {t('Sections.clients')}
                    </Nav.Link>
                    <Nav.Link 
                        href='home#partners'
                        onClick={handleClose}
                    >
                        {t('Sections.partners')}
                    </Nav.Link>
                    <Nav.Link 
                        href='home#contact'
                        onClick={handleClose}
                    >
                        {t('Sections.contact')}
                    </Nav.Link>
                    <Nav.Link 
                        href='https://www.sertic.com.ar/glpi/'
                    >
                        {t('Sections.assistance')}
                    </Nav.Link>
                    <Nav.Link 
                        href='workwithus'
                    >
                        {t('Sections.workWithUs')}
                    </Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
