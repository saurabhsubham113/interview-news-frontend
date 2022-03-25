import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ImageCard from '../../components/imageCard/ImageCard';
import { ApiHandler } from "../../utils/ApiHandler";

import './category.css'

const Category = () => {
    const [categoryNews, setCategoryNews] = useState([]);
    const param = useParams()

    useEffect(() => {
        getCategoryNews()
    }, [param]);

    const getCategoryNews = async () => {
        try {
            const getCategory = param.category
            const res = await ApiHandler.getCategoryNews(getCategory)
            if (res.status === "ok" && res.totalResults > 0) {
                setCategoryNews(res.articles)
            }
        } catch (error) {

        }
    }

    return (
        <div className='Category'>
            {categoryNews && categoryNews.map((catNews, index) => (
                <ImageCard
                    key={index}
                    url={catNews?.url}
                    size='2x'
                    bgImg={catNews?.urlToImage}
                    title={catNews?.title}
                    author={catNews?.author}
                    source={catNews?.source?.name}
                />

            ))}
        </div>
    )
}

export default Category