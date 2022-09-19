import React from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <Container>
            <div className='w-50 mx-auto text-center get-in-touch'>
                <h2 className='title'>Please Sign in</h2>
                <Form onSubmit={handleSubmit} className='contact-form'>
                    <Form.Group className="form-field col-lg-12" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required className="input-text js-input" />
                    </Form.Group>

                    <Form.Group className="form-field col-lg-12" controlId="formBasicPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required className="input-text js-input" />
                    </Form.Group>
                    <Form.Group className="form-field col-lg-12">
                        <button className="submit-btn" type="submit" value="Submit">
                            Sign In
                        </button>
                    </Form.Group>
                </Form>

                <p>Don't have Account? <Link to="/register" className=' pe-auto text-decoration-none' onClick={navigateRegister} > Please Register</Link> </p>

                <p>Forget Password? <button className='btn btn-link  pe-auto text-decoration-none' >Reset Password</button> </p>
            </div>
        </Container>
    );
};

export default Login;