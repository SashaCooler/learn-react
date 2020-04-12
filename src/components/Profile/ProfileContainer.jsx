import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {setUserProfile} from './../../redux/reducers/profileReducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = 2;
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(response => {
          this.props.setUserProfile(response.data)
        })
  }

  render() {
    return (
        <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profilePage.profile,
  }
};

const mapDispatchToProps = {
  setUserProfile
};


export default  connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));