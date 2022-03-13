import React from 'react'
import './textcard.css'

const TextCard = ({ title, description, author, source, url }) => {
    const newsAuthor = {
        __html: author ? author : 'No author found'
    }

    return (
        <>
            <a href={url} rel="noreferrer" target="_blank">
                <div className="Card">
                    <h2 className="Card-title">{title} </h2>
                    <p className="Card-description">{description} </p>
                    <div className="Card-footer">
                        <div className="author" dangerouslySetInnerHTML={newsAuthor} />
                        <div className="source">{source} </div>
                    </div>

                </div>
            </a >
        </>
    )
}

export default TextCard