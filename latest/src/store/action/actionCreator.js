import { baseUrl } from "../../config/api";
import { LOGIN_LOADING, LOGIN_SUCCESS } from "./actionType";

export const access_token = localStorage.getItem("access_token");

export const loginSuccess = (payload) => {
  // console.log(payload, "ini payload");
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export function loginUser(userData) {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseJSON = await response.json();
      if (!response.ok) {
        throw responseJSON;
      }
      localStorage.setItem("access_token", responseJSON);
      dispatch(fetchItemSuccess());
      dispatch(fetchItem());
      // console.log(responseJSON, "ini accessToken");
      return dispatch(loginSuccess(responseJSON));
    } catch (err) {
      throw err;
    }
  };
}

export function registerUser(userData) {
  return async (dispatch, getState) => {
    try {
      if (
        !userData.username ||
        !userData.email ||
        !userData.password ||
        !userData.phoneNumber ||
        !userData.address
      ) {
        throw new Error("All field is Required");
      }
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
    } catch (err) {
      throw err;
    }
  };
}

export function logoutUser() {
  localStorage.clear();
}
