import { signOut } from 'firebase/auth';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='headerBg text-white'>
            <Navbar>
                <Container>
                    <Navbar.Brand href="/" className='text-white'> SN eBook Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link className='text-white' as={Link} to="/items">Items</Nav.Link>
                            <Nav.Link as={Link} to="/about" className='text-white'>About</Nav.Link>
                            <Nav.Link as={Link} to="/blog" className='text-white'>Blog</Nav.Link>
                            <Nav.Link as={Link} to="/contact" className='text-white'>Contact Us</Nav.Link>

                            {
                                user ?
                                    <>
                                        <Nav.Link onClick={handleSignOut} className='text-white'>Sign out</Nav.Link>
                                        <Nav.Link as={Link} to="myItems" className='text-white'>
                                            <h6>Signed in as: ||{user.displayName}||</h6>
                                        </Nav.Link>
                                    </>
                                    :
                                    <>
                                        <Nav.Link as={Link} to="/login" className='text-white'>Login</Nav.Link>
                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;