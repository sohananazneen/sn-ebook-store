import { Container, Row } from 'react-bootstrap';
import useInventory from '../../../hooks/useInventory';
import Inventory from '../Inventory/Inventory';

const InventoryItem = () => {
    const [inventory] = useInventory();
    return (
        <div className='my-4'>
            <Container>
                <h2 className='text-center mt-4'>Items</h2>
                <Row className="d-flex justify-content-center mt-4">
                    {
                        inventory.map(inventory => <Inventory
                            key={inventory._id}
                            inventory={inventory}
                        ></Inventory>)
                    }
                </Row>
            </Container>
        </div>
    );
};
export default InventoryItem;