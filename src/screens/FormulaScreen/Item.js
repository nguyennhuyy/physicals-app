import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import MATHView from "components/MATHView";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";

function Item({ item }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() =>
        NavigationServices.navigate(SCENE_NAMES.DETAIL_FORMULA_SCREEN, {
          data: item,
        })
      }
      style={styles.item}
    >
      <View style={styles.itemWrap}>
        <AppText style={styles.itemText}>{item.name}</AppText>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: COLOR.BORDER_0,
              flex: 1,
            }}
          />
          <SVG_NAME.ICON_ARROW_RIGHT style={styles.itemArrow} />
        </View>
        <MATHView formula={item.display} />
      </View>
    </TouchableOpacity>
  );
}

let styles = StyleSheet.create({
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
    marginVertical: 12,
    marginHorizontal: 16,
  },
  itemText: {
    color: COLOR.PRIMARY,
    ...STYLE_GLOBAL.title3,
    marginRight: 32,
  },
  itemArrow: {
    fontSize: 18,
    marginLeft: 16,
  },
});

export default Item;
