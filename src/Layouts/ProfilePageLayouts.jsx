import React from 'react'
import Navbar from '../components/Fixed/NavBar'
import Footer from '../components/Fixed/Footer'
import { Outlet } from 'react-router-dom'

const ProfilePageLayouts = () => {
    return (
        <div>
            <Navbar />

            <Outlet />

            <Footer />

        </div>
    )
}

export default ProfilePageLayouts
