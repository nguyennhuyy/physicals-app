import Spinner from "react-native-loading-spinner-overlay";
import React from "react";
import styles from "./style";
import { ActivityIndicator, View, ScrollView, Dimensions } from "react-native";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";
import database, { DB_NAME } from "../../data";
const dataLength = Object.keys(DB_NAME).length;

export default function SyncDataScreen(props) {
  const { route, loading } = props;
  const { t, i18n } = useTranslate();
  return (
    <View style={styles.containerSync}>
      {/* <AppText style={{ color: "blue", fontSize: 20, marginBottom: 20 }}>
        {loading}/{dataLength}
      </AppText> */}
      <ActivityIndicator
        color={COLOR.PRIMARY}
        size="large"
        style={{ justifyContent: "center", paddingBottom: 20 }}
      />
      {/* <View style={styles.progressBox}>
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
      </View> */}
    </View>
  );
}
