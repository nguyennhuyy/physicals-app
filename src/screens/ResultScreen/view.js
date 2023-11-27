import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import styles from "../VariableScreen/styles";
import AppContainer from "components/AppContainer";
import AppTable from "components/AppTable";

export default function Result({ route }) {
  const { t, i18n } = useTranslate();
  const { tableData } = route.params;

  const tableHead = [
    t("result.tableHead_1"),
    t("result.tableHead_2"),
    t("result.tableHead_3"),
    t("result.tableHead_4"),
  ];
  return (
    <AppContainer title={t("result.title")} back={true}>
      <ScrollView
        style={[styles.container, { backgroundColor: COLOR.BACK_GROUND_0 }]}
      >
        <AppTable dataHead={tableHead} dataRow={tableData} />
      </ScrollView>
    </AppContainer>
  );
}
