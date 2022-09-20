import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useInventoryDetails from '../../hooks/useInventoryDetails';
import "./InventoryDetails.css";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { AiOutlineArrowRight } from 'react-icons/ai';

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
                <div className='d-flex justify-content-end my-4'>
                    <Button className='btn-light fw-bold text-primary' onClick={() => navigateToManage()}>Manage Inventories <AiOutlineArrowRight /></Button>
                </div>
                <Row>
                    <Col>
                        <Card className='my-4'>
                            <Card.Img variant="top" src={inventory.img} className="img-fluids w-50" />
                            <Card.Body>
                                <Card.Text><strong> {inventory.name}</strong></Card.Text>
                                <Card.Text><strong> Price: $ </strong>{inventory.price}</Card.Text>
                                <Card.Text><strong>Quantity:</strong> {inventory.quantity}</Card.Text>
                                <Card.Text><strong>Supplier Name:</strong> {inventory.supplier}</Card.Text>
                                <Card.Text>{inventory.description}</Card.Text>
                                <Card.Text>Sold:</Card.Text>
                                <div className='text-center mx-2'>
                                    <button className="submit-btn mx-2" type="submit">
                                        Delivered
                                    </button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form className='border p-5'>
                            <div className='text-center get-in-touch'>
                                <h2 className='title'>Restock the items</h2>
                            </div>
                            <input className='w-100 mb-2' type="number" name="quantity" placeholder='Enter Quantity' required />
                            <br />
                            <input className='btn-light fw-bold text-primary' type="submit" value="Restock" />
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default InventoryDetails;