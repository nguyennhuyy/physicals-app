/*
  func Helper gen actionType
*/
export const asyncTypes = (action) => ({
  ORIGIN: action,
  HANDLER: `${action}_HANDLER`,
  START: `${action}_START`,
  SUCCESS: `${action}_SUCCESS`,
  FAILURE: `${action}_FAILURE`,
  ERROR: `${action}_ERROR`,
});
// Actions
export const OTHER = {
  FIRST_TIME_USE_APP: asyncTypes("OTHER/FIRST_TIME_USE_APP"),
  SET_SYNC_LEVEL: asyncTypes("OTHER/SET_SYNC_LEVEL"),
  SET_LIST_MANAGE_EXERCISE: asyncTypes("OTHER/SET_LIST_MANAGE_EXERCISE"),
};

export const CONNECTIVITY = {
  APP_CONNECTIVITY_CHANGE: "CONNECTIVITY/APP_CONNECTIVITY_CHANGE",
};

export const LOADING = {
  FETCH: {
    FETCHING: "LOADING/FETCH_FETCHING",
    NON_FETCHING: "LOADING/FETCH_NON_FETCHING",
  },
  DIALOG: {
    SHOW: "LOADING/DIALOG_SHOW",
    HIDE: "LOADING/DIALOG_HIDE",
  },
};

export const ERROR = {
  DIALOG: {
    SHOW: "ERROR/DIALOG_SHOW",
    HIDE: "ERROR/DIALOG_HIDE",
  },
};

/* 
  AUTH
  - login
  - register
*/
export const AUTH = {
  SIGN_IN: asyncTypes("AUTH/SIGN_IN"),
};
