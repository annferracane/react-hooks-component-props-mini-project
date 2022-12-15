import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    
    const articleArray = articles.map(article => <Article article={article/>>);
        
    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;