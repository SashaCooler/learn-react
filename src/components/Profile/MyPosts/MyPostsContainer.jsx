import {
  addPostActionCreator,
  changeNewPostTextActionCreator
} from "../../../redux/reducers/profileReducer";
import MyPosts from './MyPosts';
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    posts: state.profilePage.post,
    newPostText: state.profilePage.newTextPost
  }
};
let mapDispatchToProps = dispatch => {
  return {
    updateNewPostText: text => {
      let action = changeNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    }
  }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
