import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout