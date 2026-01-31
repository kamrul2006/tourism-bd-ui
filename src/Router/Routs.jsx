import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import HomePageLayOut from "../Layouts/HomePageLayOut";
import Error404 from "../components/Fixed/Error404";
import TipsPageLayOuts from "../Layouts/TipsPageLayOuts";
import DestinationsPageLAyOut from "../Layouts/DestinationsPageLAyOut ";
import TransportPageLAyOut from "../Layouts/TransportPageLAyOut";
import BudgetPageLayout from "../Layouts/BudgetPageLayout";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        errorElement: <Error404 />,
        children: [
            {
                path: '/',
                element: <HomePageLayOut />
            },
            {
                path: '/tips',
                element: <TipsPageLayOuts />
            },
            {
                path: '/destinations',
                element: <DestinationsPageLAyOut />
            },
            {
                path: '/transport',
                element: <TransportPageLAyOut />
            },
            {
                path: '/budget',
                element: <BudgetPageLayout />
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

