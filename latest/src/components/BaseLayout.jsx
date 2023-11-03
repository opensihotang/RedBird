import { Outlet } from "react-router";
import Navbar from "./Navbar";
import PromotionPage from "./PromotionPage";
import Footer from "./Footer";


export default function () {
    return (
        <>
            <Navbar />
            <PromotionPage />
            <Footer />
        </>
    )
}