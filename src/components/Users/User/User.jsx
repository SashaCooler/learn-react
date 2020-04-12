import React from 'react';
import avatar from './../../../assets/images/avatar.png';
import style from './User.module.css';
import {NavLink} from "react-router-dom";

const User = props => {
  return (
      <div className={style.user}>
        {props.user.photos.small ?
            <NavLink to={'/profile/' + props.user.id}><img className={style.avatar} src={props.user.photos.small}
                                                           alt="avatar"/></NavLink> :
            <NavLink to={'/profile/' + props.user.id}><img className={style.avatar} src={avatar}
                                                           alt="avatar"/></NavLink>}
        <NavLink to={'/profile/' + props.user.id} className={style.userName}>{props.user.name}</NavLink>
        {props.user.followed
            ? <button disabled={props.followingInProgress} className={`${style.followButton} ${style.unfollowButton}`}
                      onClick={() => props.unfollowUser(props.user.id)}>Unfollow</button>
            : <button disabled={props.followingInProgress} className={`${style.followButton}`}
                      onClick={() => props.followUser(props.user.id)}>Follow</button>}
        {/*id: {props.user.id}*/}
        {/*{props.user.status}*/}
      </div>

  )
};

export default User;