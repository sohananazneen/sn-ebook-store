import { useEffect, useState } from 'react';

const useInventoryDetails = id => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data));

    }, [id]);
    return [inventory, setInventory]
}
export default useInventoryDetails;