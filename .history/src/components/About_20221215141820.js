import React from "react";

function About({image = "https://via.placeholder.com/215"}){
    return (
        <aside>
            <img src={image} alt="blog logo"/>

        </aside>
    )
}

export default About;