import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAcquisitionsIncorporated } from 'react-icons/fa'
import NavLink from '../Global/NavLink'

const DashboardNav = () => {
    const NavLinks = [
        {
            path: '',
            name: 'Dashboard',
        },
        {
            path: 'statistics',
            name: 'Statistics',
        },
        {
            path: 'products',
            name: 'products',
        },
    ]
    return (
        <aside
            class='d-flex flex-column flex-shrink-0 p-3 bg-dark'
            style={{ width: '280px' }}
        >
            <a
                href='/'
                class='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none'
            >
                <span class='fs-4'>Dashboard</span>
            </a>
            <hr className='bg-white' />
            <ul class='nav nav-pills flex-column mb-auto'>
                {NavLinks.map((el) => {
                    return <NavLink {...el} />
                })}
            </ul>
            <hr />
        </aside>
    )
}

export default DashboardNav
