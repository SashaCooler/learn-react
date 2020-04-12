import React from 'react';
import style from './ProfileInfo.module.css';
import avatar from './../../../assets/images/avatar.png';
import Preloader from "../../common/preloader/Preloader";

const ProfileInfo = props => {
  if(!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={style.img__wrapper}>
        <img
          src="https://images.unsplash.com/photo-1499084732479-de2c02d45fcc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          alt="1"
        />
      </div>
      <div>
        {props.profile.photos.large
            ? <img src={props.profile.photos.large} alt="avatar"/>
            : <img src={avatar} alt="avatar"/> }
        <span>{props.profile.fullName}</span>
      </div>
    </div>
  )
};

export default ProfileInfo;