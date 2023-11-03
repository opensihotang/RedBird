import { createBrowserRouter, redirect } from "react-router-dom";
// import TableItem from "../components/TableItem";
import FormLogin from "../views/login";
import PromotionPage from "../components/PromotionPage";
import BaseLayout from "../components/BaseLayout";

const router = createBrowserRouter([
    {
        path: "/login",
        // loader: () => {
        //     if (localStorage.getItem("access_token")) throw redirect("/");
        //     return null;
        // },
        element: <FormLogin />
    },
    {
        path: "/Promotion",
        element: <PromotionPage />
    },
    {
        path: "/",
        element: <BaseLayout />,
        children: [
            {
                path: "Promotion",
                element: <PromotionPage />
            },
        ]
    },
])

export default router