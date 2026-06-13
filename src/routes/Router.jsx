import { createBrowserRouter } from "react-router";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <h2>Home</h2>
    },
    {
        path: '/about',
        element: <h2>About</h2>
    }
])

export default Router;