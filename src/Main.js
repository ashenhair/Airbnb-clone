import React from "react";
import group_photo from "./images/group_photo.png";

function Main() {
    return (
        <section className="Main">
            <img src = {group_photo} alt="group_photo" className="group_photo" />
            <h1 className="main-header">Online Experiences</h1>
            <p className="main-text">Live your dreams. Enjoy your life. Join unique activities.</p>
        </section>
    )
}

export default Main;