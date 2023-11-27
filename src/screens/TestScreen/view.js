import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import NavigationServices from "navigation/navigationServices";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";

const questionsData = GET.getData({
  name: DB_NAME.QUESTION,
  search: 'is_deleted="0" && is_published="1" && is_multiple_choice = "1"',
});

const Item = ({ data }) => {
  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        NavigationServices.navigate(SCENE_NAMES.DETAIL_TEST_SCREEN, {
          data,
          questionsData,
        })
      }
    >
      <data.icon />
      <View style={{ marginHorizontal: 8, flex: 1 }}>
        <AppText style={styles.itemTitle}>{data.title}</AppText>
        <AppText style={styles.itemDescription}>{data.description}</AppText>
      </View>
      <SVG_NAME.ICON_ARROW_RIGHT />
    </TouchableOpacity>
  );
};
function Test(props) {
  const { t, i18n } = useTranslate();
  const { dataTypes, route } = props;
  let back = false;
  route?.params && (back = true);
  return (
    <AppContainer
      title={back ? t("test.title") : t("navigate:practice")}
      back={back}
    >
      <ScrollView style={[styles.container]}>
        <View style={styles.content}>
          <AppText style={styles.heading}>{t("test.heading")}</AppText>
          {dataTypes.map((item, index) => (
            <Item key={`${index}${Math.random() * 10000}`} data={item} />
          ))}
        </View>
      </ScrollView>
    </AppContainer>
  );
}

export default Test;
