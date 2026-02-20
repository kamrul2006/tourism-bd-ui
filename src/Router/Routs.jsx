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
import ManageUsers from "../components/Profile&Admin/UserManage";
import PrivetRout from "../Auth/Privet/Privetrought";
import UserProfile from "../components/Profile&Admin/UserProfile";


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
                element: <PrivetRout><DestinationsPageLAyOut /></PrivetRout>
            },
            {
                path: '/transport',
                element: <PrivetRout><TransportPageLAyOut /></PrivetRout>
            },
            {
                path: '/budget',
                element: <PrivetRout><BudgetPageLayout /></PrivetRout>
            },
            {
                path: "/tips/:id",
                element: <PrivetRout>< ReadTip /></PrivetRout>
            },
            {
                path: "/planner",
                element: <PrivetRout><TravelPlanner /></PrivetRout>
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
    // -------------profile page section--------------------
    {
        path: "/profilePage",
        element: <PrivetRout><ProfilePageLayouts /></PrivetRout>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/profilePage/profile",
                element: <UserProfile />
            },
            {
                path: "/profilePage/manage-users",
                element: <ManageUsers />
            },
        ]
    },

]);

