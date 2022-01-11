import { AUTH, LOGOUT, RESET_ERROR, SET_ERROR } from "../constants/actionTypes";

const authReducer = (state = { authData: null, error: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };

    case LOGOUT:
      localStorage.removeItem("profile");
      return { ...state, authData: null };

    case SET_ERROR:
      return { ...state, error: action.payload };

    case RESET_ERROR:
      return { ...state, error: null };

    default:
      return state;
  }
};

export default authReducer;
