import React from "react";

const Footer = () => {
    const footerStyle = {
        background: "#333", // Warna latar belakang footer
        color: "#fff", // Warna teks footer
        padding: "20px 0", // Ruang dalam footer
        textAlign: "center", // Teks rata tengah
    };

    return (
        <footer style={footerStyle}>
            <div className="container">
                <p>&copy; {new Date().getFullYear()} BlueBird</p>
                <p>Contact: Bluuuee@mail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
