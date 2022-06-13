import React from 'react';
import classes from './css/ProfileData.module.css';

function ProfileData(props) {
  return (
    <div className={props.myClasses + ' ' + classes['profile-data']}>
      <h2 className='mb-5'>Your Personal Information</h2>
      <div className={classes['data-row']}>
        <span className={classes['data-key']}>First Name</span>
        <span className={classes['data-value']}>
          {props.userData.firstName}
        </span>
      </div>
      <div className={classes['data-row']}>
        <span className={classes['data-key']}>Last Name</span>
        <span className={classes['data-value']}>{props.userData.lastName}</span>
      </div>
      <div className={classes['data-row']}>
        <span className={classes['data-key']}>Address</span>
        <span className={classes['data-value']}>{props.userData.address}</span>
      </div>
      <div className={classes['data-row']}>
        <span className={classes['data-key']}>phone</span>
        <span className={classes['data-value']}>{props.userData.phone}</span>
      </div>
      <div className={'my-4 ' + classes['data-btn']}>
        <a className='btn btn-primary'>Edit Data</a>
        <a className='btn btn-danger'>Close Your Account</a>
      </div>
    </div>
  );
}

export default ProfileData;
