import React, { useEffect } from 'react'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { NavLink } from './'
import { Link, useLocation } from 'react-router-dom'
import { useCartContext } from '../../Context/CartContext'
import { useUserContext } from '../../Context/UserContext'
function Header() {
    const { totalAmount } = useCartContext()
    const { isAuth, logOut } = useUserContext()
    const NavLinks = [
        {
            path: '/',
            name: 'Home',
        },
        {
            path: '/Products',
            name: 'Products',
        },
        {
            path: '/About',
            name: 'About',
        },
    ]

    const location = useLocation()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [location])

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark '>
            <div className='container-fluid '>
                <a className='  navbar-brand fs-1' href='#'>
                    Gamer <span className='text-danger'>Zone</span>
                </a>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse ' id='navbarNav'>
                    <ul className='navbar-nav ms-auto fs-5'>
                        {NavLinks.map((link) => {
                            return <NavLink key={link.name} {...link} />
                        })}
                        {isAuth && (
                            <NavLink path={'/checkout'} name={'Checkout'} />
                        )}
                    </ul>
                    <ul className='navbar-nav ms-auto '>
                        <li className='nav-item fs-4 '>
                            {isAuth ? (
                                <>
                                    <a
                                        className='mt-1 nav-link '
                                        onClick={logOut}
                                    >
                                        LogOut
                                    </a>
                                    <Link
                                        className='mt-1 nav-link '
                                        to='/profile'
                                    >
                                        Profile
                                    </Link>
                                </>
                            ) : (
                                <Link
                                    className='mt-1 nav-link '
                                    to='/accounts/login'
                                >
                                    LogIn
                                </Link>
                            )}
                        </li>
                        <li className='nav-item fs-4 '>
                            <Link
                                className='cart-icon fs-1 m-3 position-relative'
                                to='/cart'
                            >
                                <span className='text-danger'>
                                    <BsFillCartCheckFill />
                                </span>
                                <span
                                    className='btn m-0 p-0 border-secondary bg-danger  position-absolute  start-100 translate-middle fw-bold'
                                    style={{
                                        borderRadius: '50%',
                                        top: '25%',
                                        width: '28px',
                                        height: '28px',
                                    }}
                                >
                                    {totalAmount}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
