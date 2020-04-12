import React from 'react';
import { connect } from "react-redux";
import {
  followUser,
  unfollowUser, getUsers
} from "../../redux/reducers/usersReducer";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() { this.props.getUsers(this.props.currentPage, this.props.pageSize) }
  onPageChanged = page => { this.props.getUsers(page, this.props.pageSize) };

  render() {
    return (
        <>
          <Users users={this.props.users}
                 pageSize={this.props.pageSize}
                 totalUsersCount={this.props.totalUsersCount}
                 currentPage={this.props.currentPage}
                 followUser={this.props.followUser}
                 unfollowUser={this.props.unfollowUser}
                 onPageChanged={this.onPageChanged}
                 isFetching={this.props.isFetching}
                 followingInProgress={this.props.followingInProgress}
          />
        </>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
};

const mapDispatchToProps = dispatch => {
  return {
    followUser: id => {
      dispatch(followUser(id))
    },
    unfollowUser: id => {
      dispatch(unfollowUser(id))
    },
    getUsers: (currentPage, pageSize) => {
      dispatch(getUsers(currentPage, pageSize))
    }
  }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;

