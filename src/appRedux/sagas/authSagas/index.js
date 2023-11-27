import { takeLatest } from "redux-saga/effects";
import { AUTH } from "appRedux/actionsType";

import { call } from "redux-saga/effects";
import { signUpApi } from "appRedux/api/authApi";
import { invoke } from "helpers/sagas";
import NavigationServices from "navigation/navigationServices";
import { SCENE_NAMES } from "utils/AppConst";
import { Alert } from "react-native";
import { t } from "i18next";

 function* signUpSaga({ payload, type }) {
  console.log("payload Sign In", payload);
  const { showLoading = true, callback = () => {} } = payload || {};
  yield invoke(
    function* execution() {
      const result = yield call(
        signUpApi,
        payload.email,
        payload.user_password
      );
      yield callback(result);
      if (result.result === "success") {
        yield Alert.alert("Đăng ký thành công");
        NavigationServices.navigate(SCENE_NAMES.OTP_SCREEN, {
          isSignUp: true,
          email: payload.email,
          passWord: payload.user_password,
        });
        return;
      }
      if (result.result === "register_insert_error") {
        Alert.alert(t("common:error_code.register_insert_error"));
      } else if (result.result === "error_exist") {
        Alert.alert(t("common:error_code.error_active"));
      } else {
        Alert.alert(result.message);
      }
    },
    null,
    showLoading,
    type
  );
}


export default function* authSagas() {
  yield takeLatest(AUTH.SIGN_IN.HANDLER, signUpSaga);
 
}
