import Spinner from "react-native-loading-spinner-overlay";
import React from "react";
import { IMG_NAME, SVG_NAME } from "assets/path";
import styles from "./style";
import { View, ScrollView, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import database, { DB_NAME } from "../../data";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import STYLE_GLOBAL from "utils/StyleGlobal";
import AppConfirm from "components/AppConfirm";
const dataLength = Object.keys(DB_NAME).length;

export default function SyncDataScreen(props) {
  const { route, loading, sync, setSync } = props;
  const { t, i18n } = useTranslate();
  return sync ? (
    <View style={styles.containerSync}>
      <AppImage source={IMG_NAME.IMAGE_SYNC} style={styles.image} />
      <AppText style={styles.textSync}>{t("home.syncing")}</AppText>
      <View style={styles.progressBox}>
        <View
          style={[
            styles.progress,
            {
              width:
                (loading * 100) / dataLength > 100
                  ? 100
                  : (loading * 100) / dataLength + "%",
            },
          ]}
        />
      </View>
    </View>
  ) : (
    <AppContainer title={t("home.sync")} back>
      <View style={styles.content}>
        <AppText style={{ ...STYLE_GLOBAL.body1, textAlign: "justify" }}>
          {t("home.textSync")}
        </AppText>
      </View>
      <AppConfirm
        cancel={false}
        confirmText={t("onBoarding.start")}
        onPress={() => {
          setSync(true);
        }}
      />
    </AppContainer>
  );
}
