import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import HomePageLayOut from "../Layouts/HomePageLayOut";
import NotFound from "../components/Fixed/Error404";
import TipsPageLayOuts from "../Layouts/TipsPageLayOuts";
import DestinationsPageLAyOut from "../Layouts/DestinationsPageLAyOut ";
import TransportPageLAyOut from "../Layouts/TransportPageLAyOut";
import BudgetPageLayout from "../Layouts/BudgetPageLayout";
import LoginPage from "../Auth/Users/Loginpage";
import SignupPage from "../Auth/Users/SignupPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayouts />,
        errorElement: <NotFound />,
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
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/signup",
        element: <SignupPage />
    },

]);

