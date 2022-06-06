import React from 'react'
import hero from "./Home.module.css"
const Hero = () => {
    return (
        <section
         
            style={{ background: 'var(--bs-white    -300)' }}
        >
            <div
                className={hero.hero}
                style={{
                    minHeight: 'calc(100vh - 60px)',
                }}
            >
                <div
                    className={hero.textSide}
                    style={{
                        maxWidth: '30rem',
                    }}
                >
                    <h1 >Level Up You Gaming</h1>
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
                <div className={hero.imgSide}>
                    <img
                        className={hero.img1}
                        src='https://gamerzone391.netlify.app/static/media/hero-bcg.62414bf4.jpg'
                        alt='Gaming image 1 '
                    />
                    <img
                        className={hero.img2}
                        src='https://gamerzone391.netlify.app/static/media/hero-bcg-2.9b0cb083.jpg
'
                        alt='Gaming image 2'
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
