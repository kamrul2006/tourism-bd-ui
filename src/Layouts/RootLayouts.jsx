import { Outlet } from 'react-router-dom'
import Footer from '../components/Fixed/Footer'
import Navbar from '../components/Fixed/NavBar'
import BackToTop from '../components/Fixed/BackToTop'

const RootLayouts = () => {
    return (
        <div className="bg-[#f7f4ef]">
            <Navbar />

            <Outlet />

            <Footer />

            <BackToTop />
        </div>
    )
}

export default RootLayouts
