import React, { useState, useEffect } from 'react'
import { BiPackage } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'
import { FiDollarSign } from 'react-icons/fi'
import styled from 'styled-components'
import styles from './css/Statistics.module.css'

function Statistics({ StatisticsArray }) {
    const signs = [
        { sign: <AiOutlineStock />, color: 'info' },
        { sign: <FiDollarSign />, color: 'success' },
        { sign: <BsPerson />, color: 'warning' },
        { sign: <BiPackage />, color: 'danger' },
    ]
    return (
        <>
            <Section className='container bg-white py-4 my-4'>
                <h3 className='text-center display-5'>Statistics</h3>
                <section
                    className='d-flex flex-wrap justify-content-evenly align-items-center
'
                >
                    {StatisticsArray.map(({ name, value, id }, index) => {
                        return (
                            <div
                                key={id}
                                id={styles[signs[index].color]}
                                className='d-flex justify-content-center align-items-center p-3 text-dark m-3 rounded'
                            >
                                <span
                                    className={
                                        'text-' +
                                        signs[index].color +
                                        '  me-2 mb-2 fs-2'
                                    }
                                >
                                    {signs[index].sign}
                                </span>
                                <span>
                                    <h4>{value}K</h4>
                                    <p
                                        className={
                                            'text-capitalize fw-bold text-' +
                                            signs[index].color
                                        }
                                    >
                                        {name}
                                    </p>
                                </span>
                            </div>
                        )
                    })}
                </section>
            </Section>
            {/* 230k Sales 8.549k Customers 1.423k Products $9745 Revenue */}
        </>
    )
}
const Section = styled.section`
    div {
        width: 10rem;
    }
    h4,
    p {
        margin: 0;
    }
`

export default Statistics
