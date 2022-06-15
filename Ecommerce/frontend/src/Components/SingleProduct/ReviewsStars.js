import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'

const ReviewsStars = ({ stars, reviews }) => {
    const tempStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5
        return (
            <span key={index}>
                {stars >= index + 1 ? (
                    <BsStarFill />
                ) : stars >= number ? (
                    <BsStarHalf />
                ) : (
                    <BsStar />
                )}
            </span>
        )
    })
    return (
        <section>
            <div className=' text-warning'>{tempStars}</div>
            <div className='lead fs-6'>{` (${reviews} customer reviews)`}</div>
        </section>
    )
}

export default ReviewsStars
