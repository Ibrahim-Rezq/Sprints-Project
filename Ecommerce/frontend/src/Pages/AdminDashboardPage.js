import React from 'react'
import { Dashboard } from '../Components'
import DashboardNav from '../Components/AdminDashboard/DashboardNav'

function AdminDashboardPage() {
    return (
        <>
            <DashboardNav />
            <Dashboard />
        </>
    )
}

export default AdminDashboardPage
