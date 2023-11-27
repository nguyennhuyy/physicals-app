import { AUTH } from "appRedux/actionsType";

export const signInSubmit = (payload) => ({
  type: AUTH.SIGN_IN.HANDLER,
  payload,
});

export const signInSuccess = (payload) => ({
  type: AUTH.SIGN_IN.SUCCESS,
  payload,
});
