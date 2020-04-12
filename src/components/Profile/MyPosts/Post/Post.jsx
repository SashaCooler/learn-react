import React from 'react';
import style from './Post.module.css';

function Post(props) {
  return (
    <div>
      <div className={style.item}>{props.order}</div>
      <span>Likes ({props.likesCount})</span>
    </div>
  )
}

export default Post;