import React from 'react';

function AboutPage() {
  return (
    <section className='bg-light text-dark py-4 '>
      <section className='row container-md m-auto my-2 p-0 rounded-4 shadow-lg'>
        <div className='col-12  col-md-6 p-3 my-3 text-center fs-4'>
          <h2 className='display-2'>About Us</h2>
          <hr />
          <p className='lead'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            aspernatur voluptas inventore ab voluptates nostrum minus illo
            laborum harum laudantium earum ut, temporibus fugiat sequi explicabo
            facilis unde quos corporis!
          </p>
          <ul className='bg-light d-flex justify-content-evenly align-items-center flex-column'>
            <li className='my-2'>
              <span className='border-danger text-danger btn btn-lg fs-4'>
                work
              </span>
            </li>
            <li className='my-2'>
              <span className='border-danger text-danger btn btn-lg fs-4'>
                service
              </span>
            </li>
            <li className='my-2'>
              <span className='border-danger text-danger btn btn-lg fs-4'>
                contact
              </span>
            </li>
          </ul>
          <ul className='d-flex justify-content-center align-items-center'>
            <li className='m-2  p-2 fs-2'>
              <i className='fa fa-twitter'></i>
            </li>
            <li className='m-2  p-2 fs-2'>
              <i className='fa fa-facebook'></i>
            </li>
            <li className='m-2  p-2 fs-2'>
              <i className='fa fa-github'></i>
            </li>
            <li className='m-2  p-2 fs-2'>
              <i className='fa fa-pinterest'></i>
            </li>
          </ul>
        </div>
        <div className='d-none d-md-block col-6 overflow-hidden'>
          <img
            src='https://images.pexels.com/photos/9072286/pexels-photo-9072286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
            style={{ objectFit: 'none' }}
          />
        </div>
      </section>
    </section>
  );
}

export default AboutPage;
