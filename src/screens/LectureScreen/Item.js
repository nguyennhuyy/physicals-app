import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import { IMG_NAME, SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppBtn from "components/AppBtn";
import { replayContent } from "helpers/handleData";
import NavigationServices from "navigation/navigationServices";
import { GET } from "data/helpers";

export default function Item({ item }) {
  const { t, i18n } = useTranslate();
  return (
    <View style={styles.item}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.itemContent}
        onPress={() => {
          NavigationServices.navigate(SCENE_NAMES.DETAIL_LECTURE_SCREEN, {
            data: item,
          });
          NavigationServices.replace(SCENE_NAMES.DETAIL_LECTURE_SCREEN, {
            data: item,
          });
        }}
      >
        <AppImage
          style={{ width: 100, height: 100, borderRadius: 16 }}
          source={item.image_one || IMG_NAME.IMAGE_LOGO}
        />
        <View
          style={{
            marginLeft: 12,
            flex: 1,
          }}
        >
          <AppText numberOfLines={2} style={styles.itemHeading}>
            {item.name}
          </AppText>

          <View style={styles.itemCalendar}>
            <SVG_NAME.CALENDAR_ICON />
            <AppText style={styles.itemCalendarText}>{item.created_at}</AppText>
          </View>

          <View style={styles.itemView}>
            <SVG_NAME.ICON_VIEW />
            <AppText
              style={{
                ...STYLE_GLOBAL.body2,
                marginLeft: 4,
              }}
            >
              {item.count_view} {t("home.view")}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <AppText style={{ marginBottom: 12 }}>{item.description}</AppText>
        {(GET.getLessonTag(item.id) || []).map((topic, index) => (
          <TouchableOpacity
            key={`${index}${Math.random() * 10000}`}
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.DETAIL_TOPIC_SCREEN, {
                data: item,
              })
            }
            style={styles.topic}
          >
            <AppText style={styles.textTopic} numberOfLines={1}>
              {topic.name}
            </AppText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

let styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR.WHILE_0,
    padding: 16,
    paddingBottom: 6,
    marginBottom: 12,
    borderRadius: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: COLOR.BORDER_0,
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 12,
  },
  itemHeading: {
    ...STYLE_GLOBAL.title2,
    color: COLOR.GRAY_0,
  },
  itemCalendar: {
    flexDirection: "row",
    marginVertical: 4,
    alignItems: "center",
  },
  itemCalendarText: {
    ...STYLE_GLOBAL.body2,
    ...STYLE_GLOBAL.weight500,
    marginVertical: 4,
    marginLeft: 4,
  },
  itemView: {
    flexDirection: "row",
    alignItems: "center",
  },
  textTopic: {
    color: COLOR.WHILE_0,
  },
  topic: {
    borderRadius: 100,
    backgroundColor: COLOR.BLUE_0,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 10,
    marginBottom: 10,
  },
});
