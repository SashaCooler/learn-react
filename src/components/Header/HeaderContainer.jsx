import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {auth} from "../../redux/reducers/authReducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.auth()
  }

  render() {
    return (
        <Header {...this.props} />
    )
  }
}

const mapStateToProps = state => {
  return {
      data: state.auth.data,
      isAuth: state.auth.isAuth
  }
};

const mapDispatchToProps = dispatch => {
  return {
    auth: () => {
      dispatch(auth())
    }
  }
};



export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)
