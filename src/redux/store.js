import profileReducer from './reducers/profileReducer';
import dialogsReducer from './reducers/dialogsReducer';

let store = {
  _state: {
    dialogsPage: {
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
    },
    profilePage: {
      post: [
        {
          text: "Wow",
          likes: 10
        },
        {
          text: "Hello world",
          likes: 19
        },
        {
          text: "How are you?",
          likes: 7
        },
      ],
      newTextPost: ''
    }
  },
  _callSubscriber() {
    console.log('State was changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profilePage, action);
    dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state)
  }
}


export default store;