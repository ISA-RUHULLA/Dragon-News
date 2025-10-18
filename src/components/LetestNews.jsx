import React from 'react';
import Marquee from 'react-fast-marquee';

const LetestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Letest</p>
            <Marquee className='flex gap-5 cursor-pointer'pauseOnHover={true}>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, explicabo. Harum cum at perferendis adipisci ut eum, accusamus eaque doloremque quae, magni necessitatibus alias molestias ipsa neque vero consectetur iste!</p>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, explicabo. Harum cum at perferendis adipisci ut eum, accusamus eaque doloremque quae, magni necessitatibus alias molestias ipsa neque vero consectetur iste!</p>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, explicabo. Harum cum at perferendis adipisci ut eum, accusamus eaque doloremque quae, magni necessitatibus alias molestias ipsa neque vero consectetur iste!</p>
            </Marquee>

        </div>
    );
};

export default LetestNews;