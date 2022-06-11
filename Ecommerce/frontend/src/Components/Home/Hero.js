import React from 'react';
import hero from "./Home.module.css";
import lazer1 from "../../BtnSounds/lazer1.mp3";
import lazer2 from "../../BtnSounds/lazer2.mp3";
import lazer3 from "../../BtnSounds/lazer3.mp3";
import lazer4 from "../../BtnSounds/lazer4.mp3";

const Hero = () => {
    const btnSounds = [lazer1, lazer2, lazer3, lazer4]
    //function
    const playSound = () => {
        var audio = new Audio( `${btnSounds[Math.floor(Math.random()* btnSounds.length )]}`)
             audio.play();
            
    }

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
                    <h1 >Level Up Your Gaming</h1>
                    <p className='lead'>
                        Provident voluptate, deserunt tempora nobis magni,
                        tempore dolorem reiciendis modi suscipit, neque a.
                    </p>
                    <button onClick={playSound} className='btn btn-danger btn-lg py-2' href=''>
                        Shop now{' '}
                    </button>
                </div>
                {/* <div className={hero.imgSide}>
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
                </div> */}
            </div>
        </section>
    )
}

export default Hero
