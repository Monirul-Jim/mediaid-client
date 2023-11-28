'use client'
import { useRouter } from 'next/router';
import React from 'react';

const DynamicCategoriesDataShow = () => {
    const router = useRouter();
    const { category, subcategory } = router.query;
    return (
        <div>
            {/* <h1>{filteredData.length}</h1> */}
        </div>
    );
};

export default DynamicCategoriesDataShow;



