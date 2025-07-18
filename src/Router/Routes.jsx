import {createBrowserRouter} from "react-router";
import Login from "../auth/login/login.jsx";
import SignUp from "../auth/signup/SignUp.jsx";
import Layout from "../pages/Layout";
import NowPlaying from "../pages/Layout.jsx";
import Popular from "../components/moviepage/Popular.jsx";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <SignUp />,
    },
    {
        path: "/layout",
        element: <Layout />,
        children:[
            {
                path: "/layout/nowplaying",
                element: <NowPlaying />,
            }
        ]
    },
    {
        path: "/popularmovie",
        element: <Popular />,
    }
])
export default router;