import { Nav, Navbar, Offcanvas } from 'react-bootstrap'

export const NavbarOffcanva = ({t}) => {
    return (
        <>
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
                placement='start'
            >
                <Offcanvas.Header closeButton>
                </Offcanvas.Header>
                <Offcanvas.Body>
                <Nav className='justify-content-end flex-grow-1 pe-3'>
                    <Nav.Link href='home#home'>{t('Sections.home')}</Nav.Link>
                    <Nav.Link href='home#identity'>{t('Sections.ourIdentity')}</Nav.Link>
                    <Nav.Link href='home#services'>{t('Sections.services')}</Nav.Link>
                    <Nav.Link href='home#clients'>{t('Sections.clients')}</Nav.Link>
                    <Nav.Link href='home#partners'>{t('Sections.partners')}</Nav.Link>
                    <Nav.Link href='home#contact'>{t('Sections.contact')}</Nav.Link>
                    <Nav.Link href='assistance'>{t('Sections.assistance')}</Nav.Link>
                    <Nav.Link href='workwithus'>{t('Sections.workWithUs')}</Nav.Link>
                </Nav>
                </Offcanvas.Body>
            </Navbar.Offcanvas>
        </>
    )
}
