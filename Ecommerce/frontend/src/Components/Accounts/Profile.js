import React from 'react';
import classes from './css/Profile.module.css';
import { ProfileImage, ProfileData } from './';
import LatestOrders from './LatestOrders';
import { useUserContext } from '../../Context/UserContext';

function Profile(props) {
  const { user } = useUserContext();

  return (
    <div className={classes['user-profile'] + ' container mt-5'}>
      <div className='row'>
        <ProfileImage
          myClasses='col-xs-12 col-md-4'
          profileImage={user.profileImage}></ProfileImage>
        <ProfileData
          myClasses='col-xs-12 col-md-8'
          userData={user}></ProfileData>
      </div>
      <div className={[classes.orders] + ' mt-5'}>
        <h3>Your Latest Orders</h3>
        <LatestOrders></LatestOrders>
      </div>
    </div>
  );
}

export default Profile;
