import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import useInventory from '../../hooks/useInventory';
import { toast } from 'react-toastify';
import axiosPrivate from '../../Api/axiosPrivate';

const MyItems = () => {

    const [user] = useAuthState(auth);
    const [restock, setRestock] = useState([]);
    const [inventory, setInventory] = useInventory([]);
    const navigate = useNavigate();
    useEffect(() => {
        const getRestock = async () => {
            const email = user.email;
            const url = `http://localhost:5000/restock?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setRestock(data);
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getRestock();
    }, [user])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/inventory/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = inventory.filter(inventory => inventory._id !== id);
                    setInventory(remaining);
                })
            toast('Item Deleted');
        }
    }
    return (
        <Container>
            <h2 className='text-center mt-4'>Manage Inventory Items</h2>
            <Row className="d-flex justify-content-center mt-4">
                <h2>Your Stoked Items: {restock.length}</h2>
                {
                    restock.map(restock => <div key={restock._id}>
                        <p>{restock.img}</p>
                        <h5>Name: {restock.name}</h5>
                        <p>Price: {restock.price}</p>
                        <p>Quantity: {restock.quantity}</p>
                        <p>Description: {restock.description}</p>
                        <p>Supllier Name: {restock.supplier}</p>
                        <Button className='btn btn-danger mx-2' onClick={() => handleDelete(inventory._id)}>Delete</Button>
                    </div>)
                }
            </Row>
        </Container>
    );
};

export default MyItems;