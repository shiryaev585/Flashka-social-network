import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = "@@auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "@@auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
  usersId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const getAuthUserData = () => async (dispatch) => {
  let res = await authAPI.me();
  if (res.data.resultCode === 0) {
    let { id, email, login } = res.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
  let res = await authAPI.login(email, password, rememberMe, captcha);
  if (res.data.resultCode === 0) {
    //success, get auth data
    dispatch(getAuthUserData());
  } else {
    if (res.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const getCaptchaUrl = () => async (dispatch) => {
  const res = await securityAPI.getCaptchaUrl();
  const captchaUrl = res.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch) => {
  let res = await authAPI.logout();
  if (res.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;
