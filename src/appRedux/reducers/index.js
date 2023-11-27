import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer } from "redux-persist";

// Reducer Imports
import loadingReducer from "./loadingReducer";
import connectReducer from "./connectReducer";
import errorReducer from "./errorReducer";
import auth from "./authReducer";
import other from "./otherReducer";

const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["userInfo", "token"],
  blacklist: [""],
  version: 1.0,
};

const otherPersistConfig = {
  key: "other",
  storage: AsyncStorage,
  whitelist: ["firstTimeUseApp", "syncLevel", "listManageExercise"],
  blacklist: [""],
  version: 1.0,
};

const rootReducer = combineReducers({
  loading: loadingReducer,
  connect: connectReducer,
  error: errorReducer,
  auth: persistReducer(authPersistConfig, auth),
  other: persistReducer(otherPersistConfig, other),
});

export default rootReducer;
