import React from "react"
import "./About.css"
import Image from "../../../assets/backgroung_chicken.png"
import ImageRestaurant from "../../../assets/kunafa.jpg"

const About = () => {
    return(
        <div className="about">
            <div>
                <h1 className="about-title">Little Lemon</h1>
                <h2 className="about-subtitle">Chicago</h2>

                <p className="about-description">
                Here at Little Lemon we can create an experience you won’t forget for your special event.
                Whether you’re looking to plan a Corporate Event, Staff Party, Birthday Party or 
                even your Wedding Reception we can make this happen. Get in touch with our 
                Events Team today and let us see how we can help you create memories.



                </p>
                </div>



                <img
                  className="about-image-bruchetta"
                  src={Image}
                  alt="Restarurant food"
                  height={100}
                  width={100}
                />

                 <img
                    className="about-image-restaurant"
                    src={ImageRestaurant}
                    alt="Restarurant food"
                     height={200}
                    width={200}
                />

            </div>

        
    )
}

export default About;