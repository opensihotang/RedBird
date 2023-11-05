import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigation } from "react-router-dom";
import Navbar from "./Navbar";


export default function PromotionPage() {
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        const apiUrl = "https://api.unsplash.com/photos/?client_id=yXBCJGnl1kTsAZvXLvEmmPT4ZdfbHeuI3ZiOTRMZifQ";

        fetch(apiUrl, {
            method: "GET",
            // headers: {
            //     Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjc1OTE0MTUwLCJleHAiOjE2Nzg1MDYxNTB9.TcIgL5CDZYg9o8CUsSjUbbUdsYSaLutOWni88ZBs9S8",
            // },
        })
            .then((response) => response.json())
            .then((data) => {
                setPromos(data);
                console.log(data, "ini data bro");
            })
            .catch((error) => {
                console.log(error, "ini errorr");
                console.error("Error fetching promos: ", error);
            });
    }, []);

    const imageStyle = {
        width: "100%",
        height: "300px",
        objectFit: "cover",
        borderRadius: "5px"
    };

    return (
        <>
            <Navbar />
            <div>
                <h2 style={{ marginTop: "70px" }}>Menu Promosi</h2>
                {/* promos.urls.full */}
                {promos.map((promo) => (
                    <div key={promo.id}>
                        <img src={promo.urls.small} alt="" style={imageStyle} />
                        <h3>{promo.user.name}</h3>
                    </div>
                ))}
            </div>
        </>
    );
}
