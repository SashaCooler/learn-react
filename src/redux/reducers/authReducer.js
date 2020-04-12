import UsersAPI from "../../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  data: null,
  isAuth: false
};
export const authReducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        data: action.data,
        isAuth: true
      };
    default:
      return state;
  }
};

export const setUserData = (data) => ({type: SET_USER_DATA, data});

export const auth = () => {
  return dispatch => {
    UsersAPI.authUser()
        .then(data => {
          if(data.resultCode === 0) {
            dispatch(setUserData(data.data));
          }
        })
  }
};

export default authReducer;