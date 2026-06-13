import { createBrowserRouter } from "react-router";

import HomeLayout from "../layouts/HomeLayout";
import Hero from "../pages/Hero";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout,
        children: [
            {
                index: true,
                loader: () => fetch("/skills.json"),
                Component: Hero
            },

        ]

    },
    {
        path: '/about',
        element: <h2>About</h2>
    }
])

export default Router;