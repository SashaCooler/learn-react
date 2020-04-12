import Dialogs from './Dialogs';
import {
  updateNewMessageActionCreator,
  sendMessageActionCreator
} from "../../redux/reducers/dialogsReducer";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialog: state.dialogsPage
  }
};

let mapDispatchToProps = dispatch => {
  return {
    onNewMessageChange: body => {
      let action = updateNewMessageActionCreator(body);
      dispatch(action);
    },
    onSendMessageClick: () => {
      let action = sendMessageActionCreator();
      dispatch(action)
    }
  }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
