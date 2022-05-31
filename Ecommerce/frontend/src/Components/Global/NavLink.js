import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ path, name }) => {
    return (
        <Link to={path} className='nav-item '>
            <a className=' nav-link ' aria-current='page'>
                {name}
            </a>
        </Link>
    )
}

export default NavLink
