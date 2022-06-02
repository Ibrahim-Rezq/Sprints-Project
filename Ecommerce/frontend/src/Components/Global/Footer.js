import React from 'react'
import { FaTwitterSquare } from 'react-icons/fa'
import { BsTelephoneInboundFill } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillYoutube } from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <footer className='bg-dark text-white at-5 ab-4'>
                <div className='  p-4 f-3 d-flex  justify-content-evenly align-items-center text-center text-md-left'>
                    <div className='row'>
                        <div className='footer-left-side col-12 col-md-4'>
                            <h3 className='text warning'> Gamer zone</h3>
                            <p className='w-75 m-auto'>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Possimus dolores aspernatur
                                assumenda, recusandae beatae unde ad doloremque
                                quod esse libero?
                            </p>
                        </div>

                        <div className='footer-center-side col-12 col-md-4'>
                            <h3 className='ps-3'>Usefull Links</h3>
                            <ul className='m-auto'>
                                <li>
                                    {' '}
                                    <a className=' text-warning ' href=''>
                                        Home
                                    </a>
                                </li>
                                <li>
                                    {' '}
                                    <a className='  text-warning ' href=''>
                                        Products
                                    </a>
                                </li>
                                <li>
                                    {' '}
                                    <a className='  text-warning ' href=''>
                                        Cart
                                    </a>
                                </li>
                                <li>
                                    {' '}
                                    <a className=' text-warning ' href=''>
                                        Help Center
                                    </a>
                                </li>
                                <li>
                                    {' '}
                                    <a className='  text-warning ' href=''>
                                        Report a product
                                    </a>{' '}
                                </li>
                            </ul>
                        </div>

                        <div className=' footer-right-side col-12 col-md-4'>
                            <h3 className='ps-3'>Contact</h3>
                            <ul>
                                <li>
                                    {' '}
                                    <a className=' fs-5 text-warning ' href=''>
                                        {' '}
                                        <HiMail /> Gamerzone121@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a className=' fs-5 text-warning ' href=''>
                                        {' '}
                                        <BsTelephoneInboundFill /> 145-154-966
                                    </a>{' '}
                                </li>
                                <div className='social-icons d-flex justify-content-around align-items-centerr'>
                                    <li>
                                        {' '}
                                        <a className=' fs-3 twitter ' href=''>
                                            {' '}
                                            <FaTwitterSquare />{' '}
                                        </a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a className=' fs-3 facebook ' href=''>
                                            {' '}
                                            <BsFacebook />{' '}
                                        </a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a
                                            className=' fs-3 text-danger '
                                            href=''
                                        >
                                            {' '}
                                            <BsInstagram />{' '}
                                        </a>{' '}
                                    </li>
                                    <li>
                                        {' '}
                                        <a
                                            className=' fs-3 text-danger '
                                            href=''
                                        >
                                            {' '}
                                            <AiFillYoutube />{' '}
                                        </a>{' '}
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
