import React from 'react';
import { useParams } from 'react-router';

const Category = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            Category news- {id}
        </div>
    );
};

export default Category;