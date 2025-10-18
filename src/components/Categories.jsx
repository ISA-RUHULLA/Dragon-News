import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json')
.then((res)=>res.json());
const Categories = () => {
    const categories = use(categoryPromise);

    return (
        <div>
            <h2 className='font-bold'>All Categories({categories.length})</h2>
            <div className='flex flex-col items-start mt-5 gap-2'>
                {
                    categories.map((category) => (
                        <NavLink to={`/category/${category.id}`} key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}>{category.name}</NavLink>
                    ))
                }
            </div>
        </div>
    );
};

export default Categories;