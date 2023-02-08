import { useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavDropdown } from 'react-bootstrap';
import '../../css/header.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faGlobe, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import OffCanvas from './OffCanvas';
import NavbarSearch from './NavbarSearch';

const Header = () => {
    const navigate = useNavigate();
    const [showOffCanvas, setShowOffCanvas] = useState(false);

    const handleClose = () => setShowOffCanvas(false);
    const handleShow = () => setShowOffCanvas(true);

    const goToPage = page => {
        navigate(page);
    }

    return (
        <>
            <Navbar className='header' >
                <Container>
                    {/* <Button
                    variant='dark'
                    className='ms-3 me-4'
                    onClick={handleShow}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>

                <OffCanvas showOffCanvas={showOffCanvas} handleClose={handleClose} /> */}

                    <Navbar.Brand>
                        <Nav.Link onClick={() => goToPage('/')}>
                            <FontAwesomeIcon icon={faGlobe} />
                        </Nav.Link>
                    </Navbar.Brand>

                    <Nav className="me-auto">
                        <Nav.Link onClick={() => goToPage('/favourites')}>Favorites</Nav.Link>

                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
                            <NavDropdown.Item href="#">Pants</NavDropdown.Item>
                            <NavDropdown.Item href="#">Shoes</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>

                    <NavbarSearch />

                    <Button
                        variant="dark"
                        onClick={() => goToPage('/')}
                        className='ms-5'
                    >
                        LogIn
                    </Button>

                    <Button
                        variant="dark"
                        onClick={() => goToPage('/')}
                        className='ms-1'
                    >
                        Register
                    </Button>

                    <NavDropdown
                        title={<FontAwesomeIcon icon={faCartPlus} className='fa-lg'/>}
                        id="basic-nav-dropdown"
                        className='mx-5'>
                        <NavDropdown.Item href="#">Product 1</NavDropdown.Item>
                        <NavDropdown.Item href="#">Product 2</NavDropdown.Item>
                        <NavDropdown.Item href="#">Product 3</NavDropdown.Item>
                    </NavDropdown>

                </Container>
            </Navbar>
        </>
    );
};

export default Header;