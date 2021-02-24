// import dialogsReducer from "./dialogsReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         { id: 1, message: "Hi, how are you", likesCount: 0 },
//         { id: 2, message: "It's my first post", likesCount: 0 },
//       ],
//       newPostText: "it-kamasutra.com",
//     },

//     dialogsPage: {
//       dialogs: [
//         { id: 1, name: "Dimych" },
//         { id: 2, name: "Andrey" },
//         { id: 3, name: "Sveta" },
//         { id: 4, name: "Sasha" },
//         { id: 5, name: "Viktor" },
//         { id: 6, name: "Valera" },
//       ],
//       messages: [
//         { id: 1, message: "Hi" },
//         { id: 2, message: "How is your it-kamasutra" },
//       ],
//       newMessageText: "",
//     },

//     sidebar: {
//       friends: [
//         { id: 1, name: "Andrew" },
//         { id: 2, name: "Sveta" },
//         { id: 3, name: "Sasha" },
//       ],
//     },
//   },
//   _callSuscriber() {
//     console.log("State was changed");
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSuscriber = observer;
//   },

//   dispatch(action) {

//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSuscriber(this._state);
//   },
// };




// export default store;
// window.store = store;
