import { createBrowserRouter } from "react-router";

import HomeLayout from "../layouts/HomeLayout";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: HomeLayout
    },
    {
        path: '/about',
        element: <h2>About</h2>
    }
])

export default Router;