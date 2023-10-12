import React from "react";
import './GetToKnow.css';

const GetToKnow = () => {
    return (
        <div>
            <h1>Links to get to know each other</h1>
            <div className="content">
                <p>Explore more:</p>
                <ul>
                    <a href="https://docs.google.com/presentation/d/1QBUuAik4p9iiec5HYScjNVBVmcg08AECGxoRTeP4hAw/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Four Corners
                    </a>
                </ul>  
                <ul>
                    <a href="https://docs.google.com/presentation/d/1fXIUc_3S_c-fooxwP5AWHtU948WGLl5jUYTaAM7OlPo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                        Would you Rather?
                    </a>
                </ul>
            </div>
        </div>
    );
};

export default GetToKnow;
