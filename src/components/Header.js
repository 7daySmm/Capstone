import React from "react";
import {Link} from "react-router-dom";
import bannerImg from "../images/restauranfood.jpg"

const Header = () => {
    return (
        <header className="header">
            <section>
                <div className="banner">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned restaurant, we are focused on traditional Mediterranean recipes served with a moder twist</p>
                    <Link to="/booking"><button aria-label="On Click">Reserve Table</button></Link>
                </div>

                <div className="banner-img">
                    <img srt={bannerImg} alt="" />
                </div>
            </section>
        </header>   
    );
};

export default Header;