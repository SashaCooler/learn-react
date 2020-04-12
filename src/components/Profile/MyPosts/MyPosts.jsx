import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  const postsElements = props.posts.map(post => {
    return <Post key={post.id} order={post.text} likesCount={post.likes} />;
  });

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  };

  return (
    <div>
      MyPosts
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
        <button onClick={onAddPost}>Add post</button>
        <button>Remove post</button>
      </div>
      <div className={style.posts}>{postsElements}</div>
    </div>
  );
}

export default MyPosts;
