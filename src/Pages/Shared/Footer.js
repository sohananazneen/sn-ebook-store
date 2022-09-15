import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center mt-5 bg-dark text-light'>
            <hr></hr>
            <div className="p-5">
                <Container>
                    <Row>
                        <Col xs={12} md={12}>
                            <div>
                                <h2>SN eBook Store</h2>
                                <Nav className="gap-4 justify-content-center">
                                    <Nav.Link as={Link} to="/">Legal</Nav.Link>
                                    <Nav.Link as={Link} to="/">Terms of use</Nav.Link>
                                    <Nav.Link as={Link} to="/">Privacy policy</Nav.Link>
                                    <Nav.Link as={Link} to="/">Cookie policy</Nav.Link>
                                </Nav>
                                <small>copyright &copy; {year}- All rights reserved.</small>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;