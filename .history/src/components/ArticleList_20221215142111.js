import React from "react";

function ArticleList({articles}){
    return (
        <main>
            articles.map(article => <Article></Article>)

        </main>
    )
}

export default ArticleList;