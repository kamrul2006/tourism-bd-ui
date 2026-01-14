import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Fixed/Footer'
import Navbar from '../components/Fixed/NavBar'

const RootLayouts = () => {
    return (
        <div className=''>
            <Navbar />

            <Outlet />

            <Footer />
        </div>
    )
}

export default RootLayouts
