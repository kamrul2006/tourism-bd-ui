import React from 'react'
import Footer from '../components/Fixed/Footer'
import { Outlet } from 'react-router-dom'
import ProfileNavbar from '../components/Profile&Admin/ProfileNavbar'

const ProfilePageLayouts = () => {
    return (
        <div>
            <ProfileNavbar />

            <Outlet />

            <Footer />

        </div>
    )
}

export default ProfilePageLayouts
