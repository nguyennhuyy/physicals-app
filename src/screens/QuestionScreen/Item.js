import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import AppBtn from "components/AppBtn";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import HTMLView from "components/HTMLView";
import MATHView from "components/MATHView";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default function Item({ item }) {
  const { t, i18n } = useTranslate();
  const levelDifficult = {
    1: [t("exercise.easy"), COLOR.YELLOW_0],
    2: [t("exercise.medium"), COLOR.BLUE_0],
    3: [t("exercise.hard"), COLOR.RED_0],
  };
  const multipleChoice = {
    0: [t("exercise.essay"), COLOR.PURPLE_0],
    1: [t("exercise.multiple_choice"), COLOR.GREEN_0],
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        NavigationServices.navigate(SCENE_NAMES.DETAIL_QUESTION_SCREEN, {
          data: item,
        });
        NavigationServices.replace(SCENE_NAMES.DETAIL_QUESTION_SCREEN, {
          data: item,
        });
      }}
      style={styles.question}
    >
      <View
        style={{
          borderBottomColor: COLOR.BORDER_0,
          borderBottomWidth: 1,
          paddingBottom: 4,
          marginBottom: 4,
        }}
      >
        <AppText style={styles.questionTitle}>{item.name}</AppText>
      </View>
      <HTMLView source={item.content} styleBox={{ marginBottom: 10 }} />
      {item.is_check == 1 && (
        <View style={styles.questionBtn}>
          <View
            style={[
              styles.boxType,
              { backgroundColor: multipleChoice[item.is_multiple_choice][1] },
            ]}
          >
            <AppText style={styles.type}>
              {multipleChoice[item.is_multiple_choice][0]}
            </AppText>
          </View>

          <View
            style={[
              styles.boxType,
              { backgroundColor: levelDifficult[item.level_difficult][1] },
            ]}
          >
            <AppText style={styles.type}>
              {levelDifficult[item.level_difficult][0]}
            </AppText>
          </View>
          {/* <SVG_NAME.ICON_LIKE /> */}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  question: {
    backgroundColor: COLOR.WHILE_0,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: COLOR.BORDER_0,
    borderRadius: 16,
    marginBottom: 12,
    ...STYLE_GLOBAL.shadowDefault,
  },
  questionTitle: {
    color: COLOR.PRIMARY,
    ...STYLE_GLOBAL.title3,
  },
  questionText: {
    textAlign: "justify",
    ...STYLE_GLOBAL.body1,
    marginBottom: 12,
  },
  questionBtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
  boxType: {
    borderRadius: 100,
    backgroundColor: COLOR.BLUE_0,
    marginRight: 10,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  type: {
    color: COLOR.WHILE_0,
  },
});
