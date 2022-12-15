import React from "react";

function About({image = "https://via.placeholder.com/215"}){
    return (
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{blogText}</p>

        </aside>
    )
}

export default About;