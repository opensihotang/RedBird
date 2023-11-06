import React from "react";

const Footer = () => {
    const footerStyle = {
        background: "#333",
        color: "#fff",
        padding: "20px 0",
        textAlign: "center",
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} RedBird</p>
                <p>Contact: RedBird@mail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
