import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    
    const articleArray = articles.map(article => 
        console.log(article);
    )
        
    return (
        <main>
            {articleArray
        </main>
    )
}

export default ArticleList;