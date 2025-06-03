import { createBrowserRouter } from "react-router-dom";
import Root from "../Roots/Root";
import Home from "../Pages/Home";
import Error from "./Error";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('news.json')
            },
            {
                path: '/news/:id',
                element: <News />
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    }
])

export default router;