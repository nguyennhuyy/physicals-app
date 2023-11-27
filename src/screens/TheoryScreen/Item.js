import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import { IMG_NAME, SVG_NAME } from "assets/path";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default function Item({ item }) {
  return (
    <TouchableOpacity
      style={styles.item}
      activeOpacity={1}
      onPress={() =>
        NavigationServices.navigate(SCENE_NAMES.DETAIL_THEORY_SCREEN, {
          data: item,
        })
      }
    >
      <View style={styles.itemWrap}>
        <View style={{ flex: 1 }}>
          <AppText
            style={[styles.itemTitle, item.intro_content && styles.hasText]}
          >
            {item.name}
          </AppText>
          <AppText>{item.intro_content}</AppText>
        </View>
        <SVG_NAME.ICON_ARROW_RIGHT style={styles.itemArrow} />
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR.WHILE_0,
    borderColor: COLOR.BORDER_0,
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    marginBottom: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  hasText: {
    borderBottomColor: COLOR.BORDER_0,
    borderBottomWidth: 1,
    paddingBottom: 4,
    marginBottom: 4,
  },
  itemTitle: {
    color: COLOR.PRIMARY,
    ...STYLE_GLOBAL.title3,
  },
  itemArrow: {
    fontSize: 18,
    marginLeft: 16,
  },
});
