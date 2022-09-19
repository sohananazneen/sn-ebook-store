import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../hooks/useInventoryDetails';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const InventoryDetails = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useInventoryDetails(id);
    const [user] = useAuthState(auth);

    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/manageInventories`);
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={inventory.img} className="img-fluids w-50" />
                            <Card.Body>
                                <Card.Title>{inventory.name}</Card.Title>
                                <Card.Text><strong> || Price: $ {inventory.price} ||</strong></Card.Text>
                                <Card.Text>Quantity: {inventory.quantity}</Card.Text>
                                <Card.Text>Supplier Name: {inventory.supplier}</Card.Text>
                                <Card.Text>{inventory.description}</Card.Text>
                                <Card.Text>Sold:</Card.Text>
                                <div className='text-center mx-2'>                               <Button className='mx-2'>Delivered </Button>
                                    <Button onClick={() => navigateToManage()} className=' mx-2'>Manage Inventories</Button>
                                </div>
                            </Card.Body>
                        </Card>
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