import { OTHER } from "appRedux/actionsType";
import FCMService from "utils/FCMService";

const initialState = {
  firstTimeUseApp: true,
  syncLevel: 0,
  listManageExercise: [],
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case OTHER.FIRST_TIME_USE_APP: {
      const value = state.firstTimeUseApp;
      if (value) {
        return { ...state, firstTimeUseApp: false };
      }
      return { ...state };
    }

    case OTHER.SET_SYNC_LEVEL.HANDLER: {
      return { ...state, syncLevel: action.payload.syncLevel };
    }
    case OTHER.SET_LIST_MANAGE_EXERCISE.HANDLER: {
      return {
        ...state,
        listManageExercise: [...state.listManageExercise, action.payload],
      };
    }
    default:
      return state;
  }
};

export default otherReducer;
