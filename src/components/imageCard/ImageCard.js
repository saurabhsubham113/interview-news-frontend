import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './imagecard.css'
const ImageCard = ({ size = '2x', bgImg = '', title, author, source, url }) => {

    const imgCard = useRef(null)
    let imgWidth = "40rem"
    let imgHeight = "20rem"

    if (size === '1x') {
        imgWidth = "40rem"
        imgHeight = "20rem"
    }
    else if (size === '2x') {
        imgWidth = "52rem"
        imgHeight = "35rem"
    }

    const newsImage = {
        backgroundImage: `url(${bgImg})`,
        height: imgHeight,
        width: imgWidth,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: " 0.875rem",
        backgroundColor: " rgb(204, 204, 204)",

    }
    const newsAuthor = {
        __html: author ? author : "No author found"
    }

    return (
        <>
            <a href={url} rel="noreferrer" target="_blank" >
                <div className="ImageCard" ref={imgCard} style={newsImage}>
                    <div className="ImageCard-text-container">
                        <h2 className="ImageCard-title">{title}</h2>
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