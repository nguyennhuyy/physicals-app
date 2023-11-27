import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import AppText from "components/AppText";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import { IMG_NAME, SVG_NAME } from "assets/path";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";

export default function Item({ item }) {
  const dataChild = GET.getDataByParentId({
    name: DB_NAME.TAG,
    parent_id: item.id,
  });
  return (
    <View style={styles.item}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() =>
          NavigationServices.navigate(SCENE_NAMES.DETAIL_TOPIC_SCREEN, {
            data: item,
          })
        }
      >
        <View style={styles.itemWrap}>
          <View style={{ flex: 1 }}>
            <View
              style={
                dataChild.length > 0 && {
                  borderBottomColor: COLOR.BORDER_0,
                  borderBottomWidth: 1,
                  paddingBottom: 4,
                  marginBottom: 4,
                }
              }
            >
              <AppText style={styles.itemTitle}>{item.name}</AppText>
            </View>
            {dataChild.map((item, index) => {
              return (
                <TouchableOpacity
                  style={styles.itemTopic}
                  key={`${index}${Math.random() * 10000}`}
                  onPress={() =>
                    NavigationServices.navigate(
                      SCENE_NAMES.DETAIL_TOPIC_SCREEN,
                      {
                        data: item,
                      }
                    )
                  }
                >
                  {/* <SVG_NAME.ICON_TOPIC_2 /> */}
                  <AppText numberOfLines={2} style={styles.itemTopicText}>
                    {"+ "} {item.name}
                  </AppText>
                </TouchableOpacity>
              );
            })}
            {/* {item.intro_content !== "" && (
              <AppText style={styles.itemText}>{item.intro_content}</AppText>
            )} */}
          </View>
          <SVG_NAME.ICON_ARROW_RIGHT style={styles.itemArrow} />
        </View>
      </TouchableOpacity>
    </View>
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
  },
  itemWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 12,
    marginHorizontal: 16,
  },
  itemTitle: {
    color: COLOR.PRIMARY,
    ...STYLE_GLOBAL.title3,
  },
  itemText: {
    ...STYLE_GLOBAL.body1,
  },
  itemArrow: {
    fontSize: 18,
    marginLeft: 16,
  },
  itemTopicWrap: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 12,
  },
  itemTopic: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  itemTopicText: {
    ...STYLE_GLOBAL.body1,
    color: COLOR.BLUE_0,
    marginLeft: 4,
  },
});
