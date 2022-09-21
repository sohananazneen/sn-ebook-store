
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const getToken = async () => {
            // console.log(user);
            const email = user?.user?.email;
            if (email) {
                const { data } = await axios.post('https://mysterious-reef-45154.herokuapp.com/login', { email });
                // console.log(data);
                setToken(data.accessToken);
                localStorage.setItem('accessToken', data.accessToken);
            }
        }
        getToken();
    }, [user]);
    return [token];
}
export default useToken;