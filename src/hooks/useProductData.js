
import axios from 'axios';
import { useState, useEffect } from 'react';

const useProductData = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProductData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/get-product-admin');
                setProducts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        getProductData();
    }, []);

    return { products, isLoading };
};

export default useProductData;
