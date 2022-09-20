import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { _id, name, img, short_description, price, quantity, supplier } = inventory;

    const navigate = useNavigate();
    const navigateToUpdate = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Col md={4} className="mb-4">
            <Card style={{ height: '650px' }}>
                <Card.Img variant="top" src={img} className="img-fluid img-size" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{short_description}</Card.Text>
                    <Card.Text><strong> Price: </strong>$ {price}</Card.Text>
                    <Card.Text><strong>Quantity:</strong> {quantity}</Card.Text>
                    <Card.Text><strong>Supplier Name:</strong> {supplier}</Card.Text>
                    <div onClick={() => navigateToUpdate(_id)} className='submit-btn mx-2'>Manage</div>
                </Card.Body>
            </Card>
        </Col>
    );
};
export default Inventory;