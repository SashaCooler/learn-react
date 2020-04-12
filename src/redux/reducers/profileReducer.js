const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  post: [
    {
      id: 1,
      text: "Wow",
      likes: 10
    },
    {
      id: 2,
      text: "Hello world",
      likes: 19
    },
    {
      id: 3,
      text: "How are you?",
      likes: 7
    },
  ],
  newTextPost: '',
  profile: null
};

const profileReducer = (state=initialState, action) => {

  switch(action.type) {
    case ADD_POST: {
      const newPost = {
        text: state.newTextPost,
        likes: 0
      };
      return {
        ...state,
        post: [...state.post, newPost],
        newTextPost: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newTextPost: action.newPost
      };
    }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile};
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const changeNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPost: text
  }
};

export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile});



export default profileReducer;