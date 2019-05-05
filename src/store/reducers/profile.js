import { SET_USER_PROFILE, SET_USERNAME } from "../constants";

const initialState = {
  profile: {
    name: "king arthur"
  },
  username: "king arthur"
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload
      };
    default:
      return state;
  }
};

export default profileReducer;
