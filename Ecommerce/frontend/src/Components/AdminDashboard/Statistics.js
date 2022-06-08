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
        { sign: <BiPackage />, color: 'primary' },
    ]
    return (
        <>
            <Section className='container bg-white '>
                <h3 className='text-center display-5 m-0'>Statistics</h3>
                <section className='row justify-content-center align-items-center'>
                    {StatisticsArray.map(
                        ({ name, value, id, Range }, index) => {
                            return (
                                <div
                                    key={id}
                                    className='col-12 col-md-4 col-lg-3 
                                d-flex justify-content-center align-items-center  mx-2 p-2 rounded '
                                >
                                    <div
                                        class={`card border-${signs[index]?.color} mb-3 text-center w-100`}
                                    >
                                        <div class='card-header fs-5 text-capitalize '>
                                            {name}
                                        </div>
                                        <div class='card-body'>
                                            <h5 class='card-title'>{value}k</h5>
                                        </div>
                                        <div
                                            class={`card-footer bg-transparent border-${signs[index]?.color}`}
                                        >
                                            {Range}
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )}
                </section>
            </Section>
            {/* 230k Sales 8.549k Customers 1.423k Products $9745 Revenue */}
        </>
    )
}
const Section = styled.section``

export default Statistics
