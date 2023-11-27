import { AUTH } from "appRedux/actionsType";

const initialState = {
  token: "",
  userInfo: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH.SIGN_IN.SUCCESS: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
