import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import styles from "./styles";
import ItemFormula from "screens/FormulaScreen/Item";
import ItemTopic from "screens/TopicScreen/Item";
import { ItemArticle } from "screens/ArticleScreen/view";
import ItemQuestion from "screens/QuestionScreen/Item";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppHeading from "components/AppHeading";
import NavigationServices from "navigation/navigationServices";
import CategoriesScreen from "screens/CategoryScreen";
import AppText from "components/AppText";

export default function HomeScreen({
  formulaData,
  questionData,
  topicData,
  articleData,
  categoryData,
  userName = "",
  syncLevel,
}) {
  const { t, i18n } = useTranslate();
  return (
    <AppContainer
      title={`${t("home.hello")} ${userName}`}
      greeting={t("home.greeting")}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {syncLevel < 2 && (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              margin: 16,
              backgroundColor: COLOR.BACK_GROUND_2,
              borderRadius: 16,
              padding: 16,
              marginBottom: 0,
            }}
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.SYNC_DATA_SCREEN)
            }
          >
            <View style={{ flex: 1, paddingRight: 16 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <SVG_NAME.SYNC_ICON />
                <AppText style={styles.sync}>{t("home.sync")}</AppText>
              </View>
              <AppText style={styles.syncText}>{t("home.msgSync")}</AppText>
            </View>
            <SVG_NAME.ICON_ARROW_RIGHT />
          </TouchableOpacity>
        )}
        <View style={styles.content}>
          <AppHeading
            title={t("home.category")}
            onPress={() => {
              NavigationServices.navigate(SCENE_NAMES.CATEGORIES_SCREEN, {
                listCategory: categoryData,
              });
            }}
          />
          <CategoriesScreen type={"home"} />
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <AppHeading
            title={t("home.formula")}
            onPress={() => {
              NavigationServices.navigate(SCENE_NAMES.FORMULA_SCREEN);
            }}
          />
          <View style={styles.contentWrap}>
            {formulaData.map((item, index) => (
              <ItemFormula
                key={`${index}${Math.random() * 10000}`}
                item={item}
              />
            ))}
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <AppHeading
            title={t("home.question")}
            onPress={() => {
              NavigationServices.navigate(SCENE_NAMES.QUESTION_SCREEN);
            }}
          />
          <View style={styles.contentWrap}>
            {questionData.map((item, index) => (
              <ItemQuestion
                key={`${index}${Math.random() * 10000}`}
                item={item}
              />
            ))}
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <AppHeading
            title={t("home.topic")}
            onPress={() => {
              NavigationServices.navigate(SCENE_NAMES.TOPIC_SCREEN);
            }}
          />
          <View style={styles.contentWrap}>
            {topicData.map((item, index) => (
              <ItemTopic key={`${index}${Math.random() * 10000}`} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.hr} />
        <View style={styles.content}>
          <AppHeading
            title={t("home.article")}
            onPress={() => {
              NavigationServices.navigate(SCENE_NAMES.ARTICLE_SCREEN, {
                back: true,
              });
            }}
          />
          <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={[styles.contentWrap, styles.article]}>
              {articleData.map((item, index) => (
                <ItemArticle
                  key={`${index}${Math.random() * 10000}`}
                  item={item}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
