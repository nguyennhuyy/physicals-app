import React from "react";
import { StyleSheet, View, TouchableOpacity, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import NavigationServices from "navigation/navigationServices";

export default function TopicRelate(props) {
  const { listTopic } = props;
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.topic")} type={2} />
      <View style={styles.itemTopicWrap}>
        {listTopic.map((item, index) => (
          <TouchableOpacity
            style={styles.itemTopic}
            key={`${index}${Math.random() * 10000}`}
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.DETAIL_TOPIC_SCREEN, {
                data: item,
              })
            }
          >
            <SVG_NAME.ICON_TOPIC_2 />
            <AppText style={styles.itemTopicText}>{item.name}</AppText>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
