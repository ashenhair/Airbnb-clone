import React from "react";
import airbnb from "./images/airbnb.png";

function Navbar() {
    return (
        <nav className="nav--container">
            <img src = {airbnb} alt="airbnb" className="airbnb-logo" />
        </nav>
    )
}

export default Navbar;