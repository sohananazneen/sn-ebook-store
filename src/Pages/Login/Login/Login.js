import React from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import axios from 'axios';

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

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
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
        const { data } = await axios.post('https://mysterious-reef-45154.herokuapp.com/login', { email });
        // console.log(data);
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
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

                <p>Forget Password? <button className='btn btn-link  pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
                <SocialLogin></SocialLogin>
            </div>
        </Container>
    );
};

export default Login;