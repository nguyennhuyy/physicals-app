import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import useTranslate from "hooks/useTranslate";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { IMG_NAME, SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppRowTable from "components/AppRowTable";
import AppButton from "components/AppButton";
import NavigationServices from "navigation/navigationServices";
import useSelectorShallow from "hooks/useSelectorShallowEqual";
import { getListManageExerciseSelector } from "appRedux/selectors/otherSelector";
import NotData from "screens/SearchScreen/NotData";

const Item = ({ item }) => {
  const { dataRow, tableData } = item;
  const { t, i18n } = useTranslate();
  return (
    <View style={styles.item}>
      <AppRowTable data={dataRow} />
      <AppButton
        text={t("exercise.detail")}
        color={COLOR.WHILE_0}
        bgc={COLOR.BLUE_0}
        style={{ marginTop: 16 }}
        onPress={() =>
          NavigationServices.navigate(SCENE_NAMES.RESULT_SCREEN, { tableData })
        }
      />
    </View>
  );
};

export default function ManageExercise() {
  const listManageExercise =
    useSelectorShallow(getListManageExerciseSelector).listManageExercise || [];
  const { t, i18n } = useTranslate();
  return (
    <AppContainer
      title={t("exercise.manage")}
      back={true}
      onBack={() => NavigationServices.resetActionTo(SCENE_NAMES.ROOTS_SCREEN)}
    >
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* <TouchableOpacity style={styles.login}>
            <AppText style={{ flex: 1 }}>{t("exercise.login")}</AppText>
            <SVG_NAME.ARROW_RIGHT_LOGIN style={{ marginLeft: 12 }} />
          </TouchableOpacity> */}
          {listManageExercise?.length ? (
            listManageExercise.map((item, index) => (
              <Item key={`${index}${Math.random() * 10000}`} item={item} />
            ))
          ) : (
            <NotData />
          )}
        </View>
      </ScrollView>
    </AppContainer>
  );
}
