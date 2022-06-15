import React from 'react';
import hero from './Home.module.css';
import lazer1 from '../../BtnSounds/lazer1.mp3';
import lazer2 from '../../BtnSounds/lazer2.mp3';
import lazer3 from '../../BtnSounds/lazer3.mp3';
import lazer4 from '../../BtnSounds/lazer4.mp3';

const Hero = () => {
  const btnSounds = [lazer1, lazer2, lazer3, lazer4];
  const playSound = () => {
    var audio = new Audio(
      `${btnSounds[Math.floor(Math.random() * btnSounds.length)]}`
    );
    audio.play();
  };

  return (
    <>
      <section style={{ background: 'rgba(var(--bs-dark-rgb),0.1)' }}>
        <div
          className='d-flex justify-content-center align-items-center text-center'
          style={{
            minHeight: 'calc(100vh - 60px)',
          }}>
          <div className=' ' style={{ maxWidth: '50rem' }}>
            <h1 className='display-1 mb-5 fw-bold'>
              Level <span className='text-danger'>Up</span> <br />
              Your Gaming
            </h1>
            <p className='lead'>
              Provident voluptate, deserunt tempora nobis magni, tempore dolorem
              reiciendis modi suscipit, neque a. Provident voluptate, deserunt
              tempora nobis magni, tempore dolorem reiciendis modi suscipit,
              neque a. Provident voluptate, deserunt tempora nobis magni,
              tempore dolorem reiciendis modi suscipit, neque a.
            </p>
            <button
              onClick={playSound}
              className='btn btn-danger btn-lg py-2'
              href=''>
              Shop now{' '}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
