import React, { useEffect, useState } from 'react'
import ImageCard from '../components/imageCard/ImageCard';
import TextCard from '../components/card/TextCard'
import { ApiHandler } from "../utils/ApiHandler";
import './home.css'

const Home = () => {
    const [Headlines, setHeadlines] = useState([]);
    const [otherNews, setOtherNews] = useState([]);
    useEffect(() => {
        getLatetstNews()
    }, [])

    const getLatetstNews = async () => {
        const res = await ApiHandler.getLatetstNews()
        if (res.status === "ok" && res.totalResults > 0) {
            setHeadlines(res.articles[0])
            setOtherNews(res.articles.splice(1))
        }
    }

    return (
        <div className="Home">
            <div className="Home-hero">
                {Headlines && <ImageCard url={Headlines?.url} size='2x' bgImg={Headlines?.urlToImage} title={Headlines?.title} author={Headlines?.author} source={Headlines?.source?.name} />}
                <aside className='Home-sidebar'>
                    <TextCard title={Headlines?.title} author={Headlines?.author} source={Headlines?.source?.name} />
                    <TextCard title={Headlines?.title} author={Headlines?.author} source={Headlines?.source?.name} />
                    <TextCard title={Headlines?.title} author={Headlines?.author} source={Headlines?.source?.name} />
                    <TextCard title={Headlines?.title} author={Headlines?.author} source={Headlines?.source?.name} />
                </aside>
            </div>
            {otherNews && otherNews.map((news, index) => (
                <ImageCard url={news?.url} key={index} size='1x' bgImg={news?.urlToImage} title={news?.title} author={news?.author} source={news?.source?.name} />
            ))}
        </div>
    )
}

export default Home