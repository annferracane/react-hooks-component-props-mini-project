import React from "react";

function Article({title, articleDate}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{articleDate}</small>
        </article>
    )
}

export default Article;