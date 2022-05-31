import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ path, name }) => {
    return (
        <li className='nav-item '>
            <Link to={path} className=' nav-link ' aria-current='page'>
                {name}
            </Link>
        </li>
    )
}

export default NavLink
