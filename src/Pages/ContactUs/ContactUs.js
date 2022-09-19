import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='my-4'>
            <hr />
            <div className='text-center border my-2 get-in-touch'>
                <h2 className='title'>Get In Touch</h2>
                <div className='d-flex justify-content-center'>
                    <Form className='contact-form my-4'>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Your Name" required className="input-text js-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" placeholder="Enter email" required className="input-text js-input" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" placeholder="Password" required className="input-text js-input" />
                        </Form.Group>

                        <button className="submit-btn" type="submit" value="Register">
                            Submit
                        </button>
                    </Form>
                </div>
            </div>
            <hr />
        </div >
    );
};

export default ContactUs;