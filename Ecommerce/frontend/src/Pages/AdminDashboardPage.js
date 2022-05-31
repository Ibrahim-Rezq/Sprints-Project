import React from 'react'
import { Dashboard } from '../Components'
import DashboardNav from '../Components/AdminDashboard/DashboardNav'
import { Route, Routes } from 'react-router-dom'

function AdminDashboardPage() {
    return (
        <>
            <section
                className='d-flex position-relative bg-light'
                style={{ minHeight: 'calc(100vh - 60px)' }}
            >
                <DashboardNav />
                <section className='container d-flex justify-content-center align-items-center '>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                    </Routes>
                </section>
            </section>
        </>
    )
}

export default AdminDashboardPage
