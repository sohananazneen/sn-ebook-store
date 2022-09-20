import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from '../../Images/book.jpg';
import "./About.css";

const About = () => {
    return (
        <Container>
            <Row>
                <div className='get-in-touch'>
                    <h2 className='title'>About us</h2>
                </div>
                <Col md={6}>
                    <img src={about} className="w-100" alt="" />
                </Col>
                <Col md={6}>
                    <p>
                        An e-book or electronic book is a non-editable text that is converted into a digital format and displayed and read on an electronic device, such as a tablet or smartphone. Unlike other text that can be read on a device, an e-book is not editable. This is for the safety and protection of the author.</p>
                    <p>
                        An e-book or electronic book is a non-editable text that is converted into a digital format and displayed and read on an electronic device, such as a tablet or smartphone. Unlike other text that can be read on a device, an e-book is not editable.</p>
                    <p>
                        An e-book or electronic book is a non-editable text that is converted into a digital format and displayed and read on an electronic device, such as a tablet or smartphone.</p>
                    <p>
                        An e-book or electronic book is a non-editable text that is converted into a digital format and displayed and read on an electronic device.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;