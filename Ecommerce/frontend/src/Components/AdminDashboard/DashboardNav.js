import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAcquisitionsIncorporated } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import NavLink from '../Global/NavLink'
import styles from './css/DashboardNav.module.css'

const DashboardNav = () => {
    const NavLinks = [
        {
            path: '',
            name: 'Dashboard',
        },
        {
            path: 'orders',
            name: 'orders',
        },
        {
            path: 'products',
            name: 'products',
        },
    ]

    const [isNavActive, setIsNavActive] = useState(false)
    return (
        <aside
            className={
                'd-flex flex-column flex-shrink-0 p-3 bg-dark ' +
                styles.NavResponsive +
                ' ' +
                (isNavActive ? styles.NavActive : '')
            }
            style={{ width: '280px' }}
        >
            <span
                className='position-absolute start-100 top-0 bg-dark text-danger fs-4 p-0 px-2 pb-2'
                onClick={() => setIsNavActive(!isNavActive)}
            >
                <MdNavigateNext />
            </span>
            <span
                href='/'
                className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-light text-decoration-none fs-4'
            >
                Dashboard
            </span>
            <hr className='bg-white' />
            <ul className='nav nav-pills flex-column mb-auto'>
                {NavLinks.map(({ name, path }) => {
                    return (
                        <li
                            onClick={() => setIsNavActive(!isNavActive)}
                            key={path}
                            className='nav-item'
                        >
                            <Link
                                to={path}
                                className='text-white nav-link '
                                aria-current='page'
                            >
                                {name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <hr />
        </aside>
    )
}

export default DashboardNav
