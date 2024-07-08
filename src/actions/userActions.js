import axios from "axios";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const SET_AUTH_ERROR = "SET_AUTH_ERROR";

export const loginUser =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/users", {
        params: { email, password },
      });

      if (response.data.length > 0) {
        dispatch({ type: LOGIN_USER, payload: response.data[0] });
      } else {
        dispatch({ type: SET_AUTH_ERROR, payload: "Invalid credentials" });
      }
    } catch (error) {
      dispatch({ type: SET_AUTH_ERROR, payload: "An error occurred" });
    }
  };

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
