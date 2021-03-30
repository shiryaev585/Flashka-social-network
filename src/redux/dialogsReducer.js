const SEND_MESSAGE = "@@dialog/SEND_MESSAGE";

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
};

const dialogsReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { message: body }],
      };

    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText });

export default dialogsReducer;
