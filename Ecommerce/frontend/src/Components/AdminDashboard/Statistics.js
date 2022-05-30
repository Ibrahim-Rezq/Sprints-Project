import React, { useState, useEffect } from 'react'
import { BiPackage } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { AiOutlineStock } from 'react-icons/ai'
import { FiDollarSign } from 'react-icons/fi'
import styled from 'styled-components'

function Statistics({ StatisticsArray }) {
    const signs = [
        <AiOutlineStock />,
        <FiDollarSign />,
        <BsPerson />,
        <BiPackage />,
    ]
    return (
        <>
            <Section className='container bg-light'>
                <h3 className='text-center display-4'>Statistics</h3>
                <section className='d-flex flex-wrap justify-content-center align-items-center'>
                    {StatisticsArray.map(({ name, value, id }, index) => {
                        return (
                            <div
                                key={id}
                                className='d-flex justify-content-center align-items-center p-3 bg-dark text-light m-3'
                            >
                                <span className='text-danger  me-2 fs-2'>
                                    {signs[index]}
                                </span>
                                <span>
                                    <h4>{value}K</h4>
                                    <p>{name}</p>
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
