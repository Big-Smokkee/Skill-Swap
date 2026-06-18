import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Hero from "../home/Hero";
import Login from "../components/Login";
import AuthenticationLayout from "../layouts/AuthenticationLayout";
import Signup from "../components/Signup";
import ProfileLayout from "../layouts/ProfileLayout";
import PrivateRoute from "./PrivateRoute";
import SkillDetails from "../pages/skillDetails";
import LoadingPage from "../pages/LoadingPage";


const Router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("/skills.json"),
                Component: Hero,
                hydrateFallbackElement: <LoadingPage></LoadingPage>
            },
            {
                path: '/skills/:id',
                loader: () => fetch("/skills.json"),
                element: <PrivateRoute>
                    <SkillDetails></SkillDetails>
                </PrivateRoute>,
                hydrateFallbackElement: <LoadingPage></LoadingPage>
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
        path: '/profile',
        element: <PrivateRoute>
            <ProfileLayout></ProfileLayout>
        </PrivateRoute>
    },
    {
        path: '/browse',
        element: <LoadingPage></LoadingPage>
    },
    {
        path: "*",
        Component: () => <h1>404 - Page Not Found</h1>,
    },
]);

export default Router;