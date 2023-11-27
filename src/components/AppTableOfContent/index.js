/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, StyleSheet, View } from "react-native";
import useTranslate from "hooks/useTranslate";
import React, { useMemo } from "react";
import AppText from "../AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

const styles = StyleSheet.create({
  tableOfContent: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.BORDER_0,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tableOfContentWrap: {
    backgroundColor: COLOR.BACK_GROUND_0,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  tableOfContentText: {
    ...STYLE_GLOBAL.title3,
    marginHorizontal: 12,
    color: COLOR.GRAY_0,
    flex: 1,
  },
  itemTableOfContent: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  itemTableOfContentWrap: {
    width: 4,
    height: 4,
    backgroundColor: COLOR.RED_0,
    borderRadius: 2,
    marginRight: 8,
  },
  itemTableOfContentText: {
    flex: 1,
    color: COLOR.BLUE_0,
    ...STYLE_GLOBAL.weight600,
  },
});

const Item = ({ content }) => (
  <TouchableOpacity activeOpacity={1} style={styles.itemTableOfContent}>
    <View style={styles.itemTableOfContentWrap} />
    <AppText style={styles.itemTableOfContentText}>{content}</AppText>
  </TouchableOpacity>
);

function AppTableOfContent({ data, style, onPress }) {
  const { t, i18n } = useTranslate();
  return (
    <View style={style}>
      <View style={styles.tableOfContent}>
        <TouchableOpacity>
          <SVG_NAME.ICON_MENU />
        </TouchableOpacity>
        <AppText style={styles.tableOfContentText}>
          {t("home.tableOfContent")}
        </AppText>
        <TouchableOpacity>
          <SVG_NAME.ICON_ARROW_BOTTOM />
        </TouchableOpacity>
      </View>
      <View style={styles.tableOfContentWrap}>
        {data.map((item, index) => (
          <Item key={`${index}${Math.random() * 10000}`} content={item} />
        ))}
      </View>
    </View>
  );
}

export default React.memo(AppTableOfContent);
