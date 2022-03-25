import React, { useEffect, useState } from 'react'
import ImageCard from '../../components/imageCard/ImageCard';
import TextCard from '../../components/card/TextCard'
import { ApiHandler } from "../../utils/ApiHandler";
import './home.css'

const Home = () => {
    const [otherNews, setOtherNews] = useState([]);
    const [generalNewsData, setgeneralNewsData] = useState([]);

    useEffect(() => {
        getLatetstNews()
        generalNews()
    }, [])

    const getLatetstNews = async () => {
        const res = await ApiHandler.getLatetstNews()
        if (res.status === "ok" && res.totalResults > 0) {

            setOtherNews(res.articles)
        }
    }

    const generalNews = async () => {
        const res = await ApiHandler.getCategoryNews('business')
        if (res.status === "ok" && res.totalResults > 0) {
            setgeneralNewsData(res.articles.splice(0, 2))
        }
    }
    return (
        <div className="Home">

            <div className='Home-top'>
                {generalNewsData && generalNewsData.map((generalNews, index) => (
                    <div key={index} style={{ width: "48%" }}>
                        <TextCard url={generalNews?.url} title={generalNews?.title} description={generalNews?.description} author={generalNews?.author} source={generalNews?.source?.name} />
                    </div>
                ))}
            </div>
            <div className="Home-otherNews-container">
                {otherNews && otherNews.map((news, index) => (
                    <div className="Home-otherNews" key={index}>
                        <ImageCard url={news?.url} size='2x' bgImg={news?.urlToImage} title={news?.title} author={news?.author} source={news?.source?.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home