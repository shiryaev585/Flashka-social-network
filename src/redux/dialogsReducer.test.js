import dialogReducer, { sendMessageActionCreator } from "./dialogsReducer"

let state = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your it-kamasutra" },
  ],
};

test('length of messages should be incremented', () => {
  let action = sendMessageActionCreator('some new message')
  let newState = dialogReducer(state, action)
  expect(newState.messages.length).toBe(3)
})