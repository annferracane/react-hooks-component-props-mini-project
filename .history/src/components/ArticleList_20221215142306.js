import React from "react";

function ArticleList({articles}){
    function articleArray() {
        return {articles.map(article => {
            <Article article={article}/>
            })}
    }
    return (
        <main>
            

        </main>
    )
}

export default ArticleList;