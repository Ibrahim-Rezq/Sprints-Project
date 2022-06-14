import React from 'react';
import classes from './CSS/About.module.css';

function AboutPage() {
  return (
    <section className='bg-light text-dark p-2'>
      <section className={classes.section}>
        <div className={classes.content}>
          <h2>About Us</h2>
          <hr />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur voluptas inventore ab voluptates nostrum minus illo
            laborum harum laudantium earum ut, temporibus fugiat sequi explicabo
            facilis unde quos corporis!
          </p>
          <ul className={classes.links}>
            <li>
              <a href='#'>work</a>
            </li>
            <div className='vertical-line'></div>
            <li>
              <a href='#'>service</a>
            </li>
            <div className='vertical-line'></div>
            <li>
              <a href='#'>contact</a>
            </li>
          </ul>
          <ul className={classes.icons}>
            <li>
              <i className='fa fa-twitter'></i>
            </li>
            <li>
              <i className='fa fa-facebook'></i>
            </li>
            <li>
              <i className='fa fa-github'></i>
            </li>
            <li>
              <i className='fa fa-pinterest'></i>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
