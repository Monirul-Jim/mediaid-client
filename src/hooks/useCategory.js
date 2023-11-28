
import axios from 'axios';
import { useState, useEffect } from 'react';

const useCategory = () => {
    const [categories, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProductData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('https://mediaaid-server.vercel.app/increase-category');
                setProducts(response.data);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        getProductData();
    }, []);

    return { categories, isLoading };
};

export default useCategory;
