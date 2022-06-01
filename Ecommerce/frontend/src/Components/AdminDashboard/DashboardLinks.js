import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLinks = ({ path, name }) => {
    return (
        <li class='nav-item'>
            <Link
                to={path}
                class='nav-link active link-light'
                aria-current='page'
            >
                {name}
            </Link>
        </li>
    )
}

export default DashboardLinks
