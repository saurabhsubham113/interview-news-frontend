import React, { useEffect, useState } from 'react'
import ImageCard from '../../components/imageCard/ImageCard';
import TextCard from '../../components/card/TextCard'
import { ApiHandler } from "../../utils/ApiHandler";
import './home.css'

const Home = () => {
    const [Headlines, setHeadlines] = useState([]);
    const [otherNews, setOtherNews] = useState([]);
    const [generalNewsData, setgeneralNewsData] = useState([]);

    useEffect(() => {
        getLatetstNews()
        generalNews()
    }, [])

    const getLatetstNews = async () => {
        const res = await ApiHandler.getLatetstNews()
        if (res.status === "ok" && res.totalResults > 0) {
            setHeadlines(res.articles.splice(0, 3))
            setOtherNews(res.articles.splice(3))
        }
    }

    const generalNews = async () => {
        const res = await ApiHandler.getCategoryNews('entertainment')
        if (res.status === "ok" && res.totalResults > 0) {
            setgeneralNewsData(res.articles.splice(0, 3))
        }
    }
    return (
        <div className="Home">
            <div className="Home-hero">
                <div className="Home-left">
                    <div className="Home-top">
                        {Headlines && <ImageCard url={Headlines[0]?.url} size='4x' bgImg={Headlines[0]?.urlToImage} title={Headlines[0]?.title} author={Headlines[0]?.author} source={Headlines[0]?.source?.name} />}
                    </div>
                    <div className="Home-bottom">
                        {Headlines && <ImageCard font='1.25rem' url={Headlines[1]?.url} size='1x' bgImg={Headlines[1]?.urlToImage} title={Headlines[1]?.title} author={Headlines[1]?.author} source={Headlines[1]?.source?.name} />}
                        {Headlines && <ImageCard font='1.25rem' url={Headlines[2]?.url} size='1x' bgImg={Headlines[2]?.urlToImage} title={Headlines[2]?.title} author={Headlines[2]?.author} source={Headlines[2]?.source?.name} />}
                    </div>
                </div>
                <div className='Home-sidebar'>
                    {generalNewsData && generalNewsData.map((generalNews, index) => (
                        <TextCard key={index} url={generalNews?.url} title={generalNews?.title} description={generalNews?.description} author={generalNews?.author} source={generalNews?.source?.name} />
                    ))}


                </div>
            </div>
            {otherNews && otherNews.map((news, index) => (
                <ImageCard url={news?.url} key={index} size='2x' bgImg={news?.urlToImage} title={news?.title} author={news?.author} source={news?.source?.name} />
            ))}
        </div>
    )
}

export default Home