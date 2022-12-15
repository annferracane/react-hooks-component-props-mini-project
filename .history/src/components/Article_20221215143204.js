import React from "react";

function Article({title, date}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
        </article>
    )
}

export default Article;