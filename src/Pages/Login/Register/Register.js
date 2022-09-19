import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>
            <div className='w-50 mx-auto text-center get-in-touch'>
                <h2 className='title'>Please Register</h2>
                <Form className='contact-form'>
                    <Form.Group className="form-field col-lg-12" controlId="formBasicName">
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" required />
                    </Form.Group>
                    <Form.Group className="form-field col-lg-12" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" required className="input-text js-input" />
                    </Form.Group>

                    <Form.Group className="form-field col-lg-12" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required className="input-text js-input" />
                    </Form.Group>
                    <Form.Group className="form-field col-lg-12" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required className="input-text js-input" />
                    </Form.Group>
                    <Form.Group className="form-field col-lg-12">
                        <div className="submit-btn" type="submit" value="Submit">
                            Register
                        </div>
                    </Form.Group>
                </Form>

                <p>Don't have Account? <Link to="/login" className=' pe-auto text-decoration-none' > Please Sign In</Link> </p>

                <p>Forget Password? <button className='btn btn-link  pe-auto text-decoration-none' >Reset Password</button> </p>
            </div>
        </Container>
    );
};

export default Register;