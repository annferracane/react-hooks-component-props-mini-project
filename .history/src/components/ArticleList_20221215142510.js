import React from "react";

function ArticleList({articles}){
    
    const articleArray = articles.map(article => 
        console.log(article)
        //<Article a={article} />
    )
        
    return (
        <main>
            

        </main>
    )
}

export default ArticleList;