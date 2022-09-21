import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../Api/axiosPrivate';
import { toast } from 'react-toastify';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://mysterious-reef-45154.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://mysterious-reef-45154.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(orders => orders._id !== id);
                    setOrders(remaining);
                })
            toast('order Deleted');
        }
    }
    return (
        <Container>
            <h2 className='text-center mt-4'>All Orders</h2>
            <h2>Your Stoked Items: {orders.length}</h2>
            <Row className="d-flex justify-content-center">
                {
                    orders.map(orders =>
                        <Col md={3}>
                            <div key={orders._id}>
                                <div className='border my-4 p-4'>
                                    <p><img src={orders.img} alt="" className="img-fluid w-25" /></p>
                                    <h5>Name: {orders.name}</h5>
                                    <p>Price: {orders.price}</p>
                                    <p>Quantity: {orders.quantity}</p>
                                    <p>Description: {orders.description}</p>
                                    <p>Supplier Name: {orders.supplier}</p>
                                    <Button className='btn btn-danger mx-2' onClick={() => handleDelete(orders._id)}>Delete</Button>
                                </div>
                            </div>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default MyItems;