import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { IMG_NAME, SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppConfirm from "components/AppConfirm";
import AppRowTable from "components/AppRowTable";
import AppTest from "components/AppTest";
import NavigationServices from "navigation/navigationServices";

export default function AfterCreateExercise({ route }) {
  const { t, i18n } = useTranslate();
  const { dataRow, questionsData, topic, submitData } = route.params;
  return (
    <AppContainer title={topic} back={true}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.notify}>
            <SVG_NAME.SUCCESS />
            <AppText style={styles.notifyContent}>
              {t("exercise.create.success")}
            </AppText>
            <AppText style={styles.notifyText}>
              {t("exercise.create.msgSuccess")}
            </AppText>
          </View>
          <AppRowTable data={dataRow} />
        </View>
      </ScrollView>
      <AppConfirm
        confirmText={t("exercise.create.btnStart")}
        cancel={false}
        onPress={() =>
          NavigationServices.navigate(SCENE_NAMES.DO_TEST_SCREEN, {
            questionsData,
            dataRow: dataRow.splice(2),
            submitData,
          })
        }
      />
    </AppContainer>
  );
}
