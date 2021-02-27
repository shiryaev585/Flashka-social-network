const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageText: action.newMessage
      };

    case SEND_MESSAGE:
      let body = state.newMessageText;
      return {
        ...state,
        newMessageText: "",
        messages: [...state.messages, { id: 3, message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessage: body,
});

export default dialogsReducer;
