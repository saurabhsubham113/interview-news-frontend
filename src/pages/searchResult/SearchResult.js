import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import TextCard from '../../components/card/TextCard';
import { ApiHandler } from "../../utils/ApiHandler";
import loader from '../../assets/Icons/icons8-dots-loading.gif'
import './searchResult.css'

const SearchResult = () => {
    const [searchNews, setSearchNews] = useState([])
    const [isError, setIsError] = useState(false);
    const [param] = useSearchParams()
    const keywords = param.get("keywords")

    //rendering component on basis of the keywords
    useEffect(() => {
        getSearchResult()
    }, [keywords])


    const getSearchResult = async () => {
        const res = await ApiHandler.searchNews(keywords)
        if (res.status === "ok" && res.totalResults > 0) {
            setSearchNews(res.articles)
            setIsError(false)
        } else {
            setIsError(true)
            return
        }
    }
    return (
        <div className="SearchResult">
            {isError ? (<div className="SearchResult-notfound">No result found for <strong>{keywords}</strong> </div>) :
                (searchNews.length > 0) ?
                    (<div className="SearchResult-card-container">
                        {searchNews.map((news, index) => (
                            <TextCard

                                url={news?.url}
                                title={news?.title}
                                description={news?.description}
                                author={news?.author}
                                source={news?.source?.name}
                            />
                        ))}
                    </div>)
                    :

                    (<div className="SearchResult-loader">
                        <img src={loader} alt="loading" />
                    </div>)
            }
        </div>
    )
}

export default SearchResult