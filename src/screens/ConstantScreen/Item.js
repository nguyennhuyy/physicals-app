import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";
import AppImage from "components/AppImage";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";

function Item({ item }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.item}
      onPress={() => {
        NavigationServices.navigate(SCENE_NAMES.DETAIL_CONSTANT_SCREEN, {
          data: item,
        });
        NavigationServices.replace(SCENE_NAMES.DETAIL_CONSTANT_SCREEN, {
          data: item,
        });
      }}
    >
      <AppText style={styles.heading}>{item.name}</AppText>
      <MATHView formula={item.display} />
      <MATHView formula={item.value} />
      {item.image_one !== null && item.image_one !== "" && (
        <AppImage source={item.image_one} style={styles.image} />
      )}
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
  item: {
    padding: 16,
    ...STYLE_GLOBAL.shadowDefault,
    borderRadius: 16,
    marginBottom: 12,
  },
  heading: {
    ...STYLE_GLOBAL.title3,
    flex: 1,
    color: COLOR.PRIMARY,
    paddingBottom: 4,
    borderBottomColor: COLOR.BORDER_0,
    borderBottomWidth: 1,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
});

export default Item;
