import React from "react";
import classes from "./css/Profile.module.css";
import ProfileImage from "./ProfileImage";
import ProfileData from "./ProfileData";
import LatestOrders from "./LatestOrders";

const DUMMY_USER = {
  fname: "Seif",
  lname: "Omran",
  address: "Obour City",
  phone: "01099662420",
  profileImage:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
};

function Profile(props) {
  return (
    <div className={classes["user-profile"] + " container mt-5"}>
      <div className="row">
        <ProfileImage myClasses="col-xs-12 col-md-4" profileImage={DUMMY_USER.profileImage}></ProfileImage>
        <ProfileData myClasses="col-xs-12 col-md-8" userData={DUMMY_USER}></ProfileData>
        
      </div>
      <div className={[classes.orders] + " mt-5"}>
        <LatestOrders></LatestOrders>
      </div>
    </div>
  );
}

export default Profile;
