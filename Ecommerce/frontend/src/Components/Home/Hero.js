import React from 'react'

const Hero = () => {
    return (
        <section
            className='bg-light py-3'
            style={{ background: 'var(--bs-gray-300)' }}
        >
            <div
                className='container d-flex justify-content-center justify-content-md-between align-items-center py-3'
                style={{
                    minHeight: 'calc(100vh - 60px)',
                }}
            >
                <div
                    className='p-2'
                    style={{
                        maxWidth: '30rem',
                    }}
                >
                    <h1 className='display-1'>Level Up You Gaming</h1>
                    <p className='lead'>
                        Cupiditate distinctio. Ullam cum nostrum placeat velit
                        odit officiis est quas modi. Incidunt debitis cupiditate
                        aperiam officiis voluptatibus quo beatae obcaecati
                        provident voluptate, deserunt tempora nobis magni,
                        tempore dolorem reiciendis modi suscipit, neque a.
                    </p>
                    <a className='btn btn-outline-danger btn-lg py-2' href=''>
                        Shop now{' '}
                    </a>
                </div>
                <div className='img-side d-none d-md-flex'>
                    <img
                        className='ms-5 img1'
                        src='https://gamerzone391.netlify.app/static/media/hero-bcg.62414bf4.jpg'
                        alt='Gaming image 2 '
                    />
                    <img
                        className='img2'
                        src='https://gamerzone391.netlify.app/static/media/hero-bcg-2.9b0cb083.jpg
'
                        alt='Gaming image 1'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
