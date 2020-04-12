const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  userData: [
    {
      id: 1,
      name: "Alexandr"
    },
    {
      id: 2,
      name: "Egor"
    },
    {
      id: 3,
      name: "Sveta"
    },
    {
      id: 4,
      name: "Nikita"
    }
  ],
  messageData: [
    {
      id: 1,
      message: "Hello"
    },
    {
      id: 2,
      message: "How are you?"
    },
    {
      id: 3,
      message: "OK"
    }
  ],
  newMessageBody: ""
};

export const dialogsReducer = (state=initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.newMessageText
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messageData: [...state.messageData, {id: 4, message: body}]
      };
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE
  }
};

export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageText: text
  }
};

export default dialogsReducer;
