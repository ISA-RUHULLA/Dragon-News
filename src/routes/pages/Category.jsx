import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard';

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([])

    useEffect(() => {
        if (id == '0') {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filterNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filterNews);
        }
        else {

            const filterNews = data.filter(news => news.category_id == id);
            console.log(filterNews);
            setCategoryNews(filterNews);
        }
    }, [id, data])
    return (
        <div>
            <h2 className='font-bold mb-5'>Total {categoryNews.length} News</h2>
            <div className='grid grid-cols-1 gap=3'>
                {
                    categoryNews.map(news => <NewsCard news={news} kay={news.id} />)
                }
            </div>
        </div>
    );
};

export default Category;