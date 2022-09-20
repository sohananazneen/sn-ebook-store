import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventory from '../../../hooks/useInventory';
import Banner from '../Banner';
import Inventory from '../Inventory/Inventory';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ContactUs from '../../ContactUs/ContactUs';
import About from '../../About/About';
import "./Home.css";

const Home = () => {
    const [inventory, setInventory] = useInventory();

    const navigate = useNavigate();
    const navigateToManage = () => {
        navigate(`/manageInventories`);
    }
    return (
        <div>
            <Banner />
            <About></About>
            <hr></hr>
            <Container>
                <div className='get-in-touch'>
                    <h2 className='title'>Items</h2>
                </div>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        inventory.slice(0, 6).map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </Row>
                <div className='d-flex justify-content-end'>
                    <Button className='btn-light fw-bold text-primary' onClick={() => navigateToManage()}>Manage Inventories <AiOutlineArrowRight /></Button>
                </div>
            </Container>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;