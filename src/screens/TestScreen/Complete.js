import React, { useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppConfirm from "components/AppConfirm";
import AppRowTable from "components/AppRowTable";
import NavigationServices from "navigation/navigationServices";
import { useActions } from "hooks/useActions";
import { setListManageExerciseSubmit } from "appRedux/actions/otherActions";

function Complete({ route }) {
  const { t, i18n } = useTranslate();
  const { tableData, dataRow } = route.params;
  const actions = useActions({
    setListManageExerciseSubmit,
  });
  const handleSetListManageExercise = (opt) => {
    actions.setListManageExerciseSubmit({ ...opt });
  };
  useEffect(() => {
    handleSetListManageExercise({ tableData, dataRow })
  }, [])

  return (
    <AppContainer
      title={t("test.result")}
      back={true}
      onBack={() => NavigationServices.resetActionTo(SCENE_NAMES.ROOTS_SCREEN)}
    >
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.notify}>
            <SVG_NAME.SUCCESS />
            <AppText style={styles.notifyContent}>{t("test.complete")}</AppText>
            <AppText style={styles.notifyText}>{t("test.msgComplete")}</AppText>
          </View>
          <AppRowTable data={dataRow} />
        </View>
      </ScrollView>
      <AppConfirm
        confirmText={t("button.detail")}
        cancelText={t("button.manage")}
        onPress={() =>
          NavigationServices.navigate(SCENE_NAMES.RESULT_SCREEN, { tableData })
        }
        onCancel={() =>
          NavigationServices.navigate(SCENE_NAMES.MANAGE_EXERCISE_SCREEN)
        }
      />
    </AppContainer>
  );
}

export default Complete;
