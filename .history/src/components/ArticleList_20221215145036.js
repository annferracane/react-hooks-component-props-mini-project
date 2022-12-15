import React from "react";
import Article from "./Article";

function ArticleList({articles}){
    
    const articleArray = articles.map(article => <Article key={article.id} title={article}/>);
        
    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;