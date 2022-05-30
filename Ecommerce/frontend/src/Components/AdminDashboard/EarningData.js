import React from 'react'
import styled from 'styled-components'
import { formatPrice } from '../../Utils/Helpers'

function EarningData({ revenueArray }) {
    return (
        <>
            <Section className='container bg-light '>
                <h3 className='text-center display-4'>Mounth Profit</h3>
                <section className='d-flex flex-wrap justify-content-center align-items-center'>
                    {revenueArray.map(
                        ({ name, profit, productsSold, id }, index) => {
                            return (
                                <div
                                    key={id}
                                    className='d-flex justify-content-center align-items-center p-3 bg-dark text-light m-3 w-25'
                                >
                                    <span>
                                        <h4 className='text-center display-6'>
                                            {name}
                                        </h4>
                                        <p className='lead'>
                                            Profit: {formatPrice(profit)}
                                        </p>
                                    </span>
                                </div>
                            )
                        }
                    )}
                </section>
            </Section>
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

export default EarningData
