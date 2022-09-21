import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../hooks/useInventoryDetails';
import "./InventoryDetails.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiOutlineArrowRight } from 'react-icons/ai';
import axios from 'axios';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useInventoryDetails(id);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/manageInventories`);
    }

    const handleOrder = event => {
        event.preventDefault();
        const order = {
            inventoryId: inventory._id,
            email: user.email,
            quantity: inventory.quantity,
            name: inventory.name,
            price: inventory.price,
            description: inventory.description,
            img: inventory.img
        }
        axios.post('https://mysterious-reef-45154.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Delivered');
                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-end my-4'>
                    <Button className='btn-light fw-bold text-primary' onClick={() => navigateToManage()}>Manage Inventories <AiOutlineArrowRight /></Button>
                </div>
                <Row>
                    <Col>
                        <Form onSubmit={handleOrder}>
                            <Card className='my-4'>
                                <Card.Img variant="top" src={inventory.img} className="img-fluids w-25" />
                                <Card.Body>
                                    <Card.Text><strong> {inventory.name}</strong></Card.Text>
                                    <Card.Text><strong> Price: $ </strong>{inventory.price}</Card.Text>
                                    <Card.Text><strong>Quantity:</strong> {inventory.quantity}</Card.Text>
                                    <Card.Text><strong>Supplier Name:</strong> {inventory.supplier}</Card.Text>
                                    <Card.Text>{inventory.description}</Card.Text>
                                    <Card.Text>Sold:</Card.Text>
                                </Card.Body>
                                <div className='text-center my-2'>
                                    <button className="submit-btn my-2" type="submit" >
                                        Deliver
                                    </button>
                                </div>
                            </Card>
                        </Form>
                    </Col>
                    <Col>
                        <h2>Restock the items</h2>
                        <Form className='border p-5 my-4'>
                            <input className='w-100 mb-2' type="number" name="quantity" placeholder='Enter Quantity' required />
                            <br />
                            <input className='btn btn-primary' type="submit" value="Restock" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InventoryDetails;