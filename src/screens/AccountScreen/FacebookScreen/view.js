import React from "react";
import { ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import AppContainer from "components/AppContainer";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";

export default function FacebookScreen() {
  const { t, i18n } = useTranslate();
  return (
    <AppContainer title={t("account.facebook")} back={true}>
      <WebView
        style={{ flex: 1 }}
        androidHardwareAccelerationDisabled={true}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
        originWhitelist={["*"]}
        renderLoading={() => (
          <ActivityIndicator
            color={COLOR.PRIMARY}
            size="large"
            style={{ flex: 1, justifyContent: "center", paddingBottom: 30 }}
          />
        )}
        source={{ uri: "https://beready.vn/nhom-hoc-facebook.html" }}
      />
    </AppContainer>
  );
}
