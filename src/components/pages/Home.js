import React from "react";
import './Home.css'
import sunrise from '../images/sunrise.jpg'

const Home = () => {
    return (
        <div>
            <h1>Welcome to 4th grade 2nd Quarter</h1>
            <div className="content">
                <img src={sunrise} alt="A beautiful sunrise" className="floating-image" />
                <p>
                    My name is Krystal Petrosky. This is my 7th year of teaching. I have a master's degree in Reading intervention.
                    I am also working on a 2nd masters to make websites.</p>
                <p>My favorite color is orange and I love Coffee. I recently stopped drinking soda.</p>
                <p> I have been married to my husband for 20 years and have been together 23 years.
                    We have two kids, two teenagers. Liam is 18 and working to buy his first car. Alec lives in Florida with their Godmother. We have 4 dogs.</p>
                <p> I am starting my own business making websites for people.
                    I am very excited to be here with you.
                </p>
            </div>
        </div>
    );
};

export default Home;
