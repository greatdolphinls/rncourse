import { SET_USER_PROFILE, SET_USERNAME } from "../../constants";

export const saveUserProfile = profile => {
  return { type: SET_USER_PROFILE, payload: profile };
};

export const setUsername = username => {
  return { type: SET_USERNAME, payload: username };
};
