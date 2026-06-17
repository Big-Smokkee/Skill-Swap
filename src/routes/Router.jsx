import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Hero from "../home/Hero";
import Login from "../components/Login";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Signup from "../components/Signup";
import SkillDetails from "../pages/SkillDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("/skills.json"),
                Component: Hero,
            },
            {
                path: '/skills/:id',
                Component: SkillDetails,
                loader: () => fetch("/skills.json"),
            }

        ],
    },
    {
        path: '/',
        Component: AuthenticationLayout,
        children: [
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/signup',
                Component: Signup
            }

        ]
    },
    {
        path: "*",
        Component: () => <h1>404 - Page Not Found</h1>,
    },
]);

export default Router;