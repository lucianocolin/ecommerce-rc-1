import { useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../css/header.css'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSolid } from "@fortawesome/free-solid-svg-icons";
import OffCanvas from './OffCanvas';

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
            <Navbar className='header'>
                <Button
                    variant='dark'
                    className='ms-3 me-4'
                    onClick={handleShow}
                >
                    <FontAwesomeIcon icon={faBars} />
                </Button>

                <OffCanvas showOffCanvas={showOffCanvas} handleClose={handleClose}/>

                <Navbar.Brand>
                    <Nav.Link onClick={() => goToPage('/')}>RC3</Nav.Link>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={() => goToPage('/')}>Home</Nav.Link>
                    <Nav.Link onClick={() => goToPage('/favourites')}>Favoritos</Nav.Link>
                </Nav>
            </Navbar>
        </>
    );
};

export default Header;