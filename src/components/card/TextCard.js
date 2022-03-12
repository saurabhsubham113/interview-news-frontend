import React from 'react'
import './textcard.css'

const TextCard = ({ title, description, author, source }) => {
    const newsAuthor = {
        __html: author
    }

    return (
        <div className="Card">
            <h2 className="Card-title">{title} </h2>
            <p className="Card-description">{description} </p>
            <div className="Card-footer">
                <div className="author" dangerouslySetInnerHTML={newsAuthor} />
                <div className="source">{source} </div>
            </div>

        </div>
    )
}

export default TextCard