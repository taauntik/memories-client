import * as api from "../api";
import {
  AUTH,
  RESET_ERROR,
  SET_ERROR,
  START_LOADING,
} from "../constants/actionTypes";

export const signin = (formData, navigate) => async (dispatch) => {
  dispatch({ type: RESET_ERROR });
  dispatch({ type: START_LOADING });
  try {
    const { data } = await api.signin(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    if (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR,
        payload: "Something went wrong! Please try again",
      });
    }
  }
};

export const signup = (formData, navigate) => async (dispatch) => {
  dispatch({ type: RESET_ERROR });
  try {
    const { data } = await api.signup(formData);

    dispatch({ type: AUTH, data });

    navigate("/");
  } catch (error) {
    if (error) {
      console.log(error);
      dispatch({
        type: SET_ERROR,
        payload: "Something went wrong! Please try again",
      });
    }
  }
};
