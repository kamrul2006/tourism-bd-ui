import React from 'react'
import { Outlet } from 'react-router-dom'

const RootLayouts = () => {
    return (
        <div className=''>

            <Outlet />
        </div>
    )
}

export default RootLayouts
