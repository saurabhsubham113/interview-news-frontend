import React from 'react'
import { Link } from 'react-router-dom'
import './imagecard.css'
const ImageCard = ({ font = '1.5em', size = '2x', bgImg = '', title, author = "----", source = "------", url }) => {

    const newsImage = {
        backgroundImage: `url(${bgImg})`,      
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
    const smallHeadlines = {
        fontSize: font
    }
    const newsAuthor = {
        __html: author ? author : "No author found"
    }

    return (
        <>
            <a href={url} rel="noreferrer" target="_blank" style={{ width: "100%" }} >
                <div className="ImageCard" style={newsImage}>
                    <div className="ImageCard-text-container">
                        <h2 style={smallHeadlines} className="ImageCard-title">{title}</h2>
                        <div className="ImageCard-attribute">
                            <p className="ImageCard-author" dangerouslySetInnerHTML={newsAuthor} />
                            <p className="ImageCard-source">{source} </p>
                        </div>
                    </div>

                </div>
            </a>
        </>
    )
}

export default ImageCard