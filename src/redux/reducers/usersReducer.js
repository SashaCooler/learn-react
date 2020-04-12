import UsersAPI from "../../API/api";

const FOLLOW_USER = 'FOLLOW-USER';
const UNFOLLOW_USER = 'UNFOLLOW-USER';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: false
};

const usersReducer = (state=initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          return (user.id === action.id) ? {...user, followed: true} : user
        })
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        users: state.users.map(user => {
          return (user.id === action.id) ? {...user, followed: false} : user
        })
      };
    case SET_USERS:
      return {...state, users: action.users};
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.count};
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {...state, followingInProgress: action.followingInProgress};
    default: return state;
  }
};

// Action creators
export const setUsers = users => ({type: SET_USERS, users});
export const follow = id => ({type: FOLLOW_USER, id});
export const unfollow = id => ({type: UNFOLLOW_USER, id});
export const setCurrentPage = page => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = count => ({type: SET_TOTAL_USERS_COUNT, count});
export const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowngInProgress = followingInProgress => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress});

// Thunk
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    UsersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  }
};

export const followUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowngInProgress(true));
    UsersAPI.followUser(userId).then(data => {
      if(data.resultCode === 0) {
        dispatch(follow(userId))
      }
      dispatch(toggleFollowngInProgress(false));
    })
  }
};

export const unfollowUser = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowngInProgress(true));
    UsersAPI.unfollowUser(userId).then(data => {
      if(data.resultCode === 0) {
        dispatch(unfollow(userId))
      }
      dispatch(toggleFollowngInProgress(false));
    })
  }
};




export default usersReducer;