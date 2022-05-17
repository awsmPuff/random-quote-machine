import React from "react";

const currenYear = new Date().getFullYear();

function Footer() {
    return (
        <p id="footer">Laurenxx {currenYear}</p>
    )
}

export default Footer;