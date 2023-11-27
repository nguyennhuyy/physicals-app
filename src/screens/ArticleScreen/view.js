import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppImage from "components/AppImage";
import AppText from "components/AppText";
import styles from "./styles";
import Item from "./Item";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import AppBtn from "components/AppBtn";
import NavigationServices from "navigation/navigationServices";
import AppFlatList from "components/AppFlatList";

export const ItemArticle = ({ item }) => {
  const { t, i18n } = useTranslate();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styleItem.item}
      onPress={() =>
        NavigationServices.navigate(SCENE_NAMES.DETAIL_ARTICLE_SCREEN, {
          data: item,
        })
      }
    >
      <AppImage source={item.image_one} style={styleItem.image} />
      <View style={styleItem.content}>
        <View style={styleItem.view}>
          <SVG_NAME.ICON_VIEW />
          <AppText style={styleItem.text}>
            {item.count_view} {t("home.view")}
          </AppText>
        </View>
        <AppText numberOfLines={3} style={styleItem.title}>
          {item.title}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

export default function ArticleScreen(props) {
  const {
    route,
    listTopic,
    listArticle,
    refreshing,
    onRefresh,
    loadMore,
    activeTab,
    setActiveTab,
  } = props;
  const { t, i18n } = useTranslate();
  let back = false;
  route?.params && (back = true);
  return (
    <AppContainer title={t("navigate:article")} search={back} back={back}>
      <View style={{ backgroundColor: COLOR.WHILE_0, paddingBottom: 8 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.listBtn}>
            {listTopic.map((topic, index) => (
              <AppBtn
                key={`${index}${Math.random() * 10000}`}
                text={topic.text}
                bgc={COLOR.PRIMARY_1}
                color={COLOR.PRIMARY}
                active={activeTab === topic.id}
                onPress={() => {
                  setActiveTab(topic.id);
                }}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <AppFlatList
        showsVerticalScrollIndicator={false}
        data={listArticle}
        renderItem={({ item }) => <Item item={item} />}
        refreshing={refreshing}
        onRefresh={onRefresh}
        loadMore={loadMore}
      />
    </AppContainer>
  );
}

const styleItem = StyleSheet.create({
  item: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
    width: 218,
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLOR.BORDER_0,
    marginRight: 16,
    marginBottom: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  content: {
    flex: 1,
  },
  view: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 4,
    marginLeft: 4,
  },
  text: {
    flex: 1,
    ...STYLE_GLOBAL.body2,
    marginLeft: 4,
  },
  title: {
    ...STYLE_GLOBAL.body1,
    ...STYLE_GLOBAL.weight500,
    color: COLOR.GRAY_0,
    textAlign: "justify",
  },
  image: { flex: 1, borderRadius: 16, width: "100%", height: 120 },
});
