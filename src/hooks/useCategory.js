
import axios from 'axios';
import { useState, useEffect } from 'react';

const useCategory = () => {
    const [categories, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getProductData = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/increase-category');
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
