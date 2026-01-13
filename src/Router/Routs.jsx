import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import HomePageLayOut from "../Layouts/HomePageLayOut";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <HomePageLayOut />
            },
        ]
    },
    // ---------------------authentication--------------
    // {
    //     path: "/login",
    //     element: <LoginPage />
    // },
    // {
    //     path: "/register",
    //     element: <SignupPage />
    // },

]);

