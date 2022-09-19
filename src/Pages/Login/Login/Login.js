import React from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const handleSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    return (
        <Container>
            <div className='w-50 mx-auto text-center get-in-touch'>
                <h2 className='title'>Please Sign in</h2>
                <Form onSubmit={handleSubmit} className='contact-form my-4'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" ref={emailRef} placeholder="Enter email" required className="input-text js-input" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" ref={passwordRef} placeholder="Password" required className="input-text js-input" />
                    </Form.Group>
                    <button className="submit-btn" type="submit" value="Register">
                        Sign in
                    </button>
                </Form>
                {errorElement}
                <p>Don't have Account? <Link to="/register" className=' pe-auto text-decoration-none' onClick={navigateRegister} > Please Register</Link> </p>

                <p>Forget Password? <button className='btn btn-link  pe-auto text-decoration-none' >Reset Password</button> </p>
            </div>
        </Container>
    );
};

export default Login;