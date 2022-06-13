import React from "react";
import classes from "./css/ProfileImage.module.css";

function ProfileImage(props) {
  return (
    
      <div className={props.myClasses + " " + classes["image-side"]}>
        <figure className={classes["img-wrapper"]}>
          <img src={props.profileImage} className="img-fluid" />
        </figure>
      </div>
    
  );
}

export default ProfileImage;
