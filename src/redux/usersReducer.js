const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [
    // {
    //   id: 1,
    //   followed: false,
    //   avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU',
    //   fullName: "Alexander",
    //   status: "I want a job",
    //   location: { city: "Moscow", country: "Russia" },
    // },
    // {
    //   id: 2,
    //   followed: false,
    //   avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU',
    //   fullName: "Dmitry",
    //   status: "I am IT-Kamasutra Yo Yo Yo",
    //   location: { city: "Minsk", country: "Belorus" },
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   avaUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU',
    //   fullName: "Olga",
    //   status: "I am a boss",
    //   location: { city: "Pyatigorsk", country: "Russia" },
    // },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
        return {...state, users: [...state.users, ...action.users]}  
    default:
      return state;
  }
};

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
