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
import ReadTip from "../components/Others/Tips/ReadTip";
import TravelPlanner from "../components/Others/TravelPlanner";
import ProfilePageLayouts from "../Layouts/ProfilePageLayouts";
import ManageUsers from "../Abdc";


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
            {
                path: "/tips/:id",
                element: < ReadTip />
            },
            {
                path: "/planner",
                element: < TravelPlanner />
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
    {
        path: "/profilePage",
        element: <ProfilePageLayouts />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/profilePage/s",
                element: <ManageUsers />
            },
        ]
    },

]);

