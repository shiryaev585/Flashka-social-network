import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "@@profile/ADD_POST";
const SET_USER_PROFILE = "@@profile/SET_USER_PROFILE";
const SET_STATUS = "@@profile/SET_STATUS";
const DELETE_POST = "@@profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = '@@profile/SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 0 },
    { id: 2, message: "It's my first post", likesCount: 0 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile, });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
  let res = await usersAPI.getProfile(userId);
  dispatch(setUserProfile(res.data));
};

export const getStatus = (userId) => async (dispatch) => {
  let res = await profileAPI.getStatus(userId);
  dispatch(setStatus(res.data));
};

export const updateStatus = (status) => async (dispatch) => {
  let res = await profileAPI.updateStatus(status);
  if (res.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export const savePhoto = (file) => async (dispatch) => {
  let res = await profileAPI.savePhoto(file);
  if (res.data.resultCode === 0) {
    dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export const saveProfile = (profile) => async (dispatch) => {
  let res = await profileAPI.saveProfile(profile);
  if (res.data.resultCode === 0) {
    // dispatch(savePhotoSuccess(res.data.data.photos));
  }
};

export default profileReducer;
