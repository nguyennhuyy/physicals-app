import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import QuestionRelate from "components/Relate/question";
import TheoryRelate from "components/Relate/theory";
import FormulaRelate from "components/Relate/formula";
import HTMLView from "components/HTMLView";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";
import NavigationServices from "navigation/navigationServices";

export default function DetailScreen({ route }) {
  const { t, i18n } = useTranslate();
  const { data } = route.params;
  const dataChild = GET.getDataByParentId({
    name: DB_NAME.TAG,
    parent_id: data.id,
  });
  return (
    <AppContainer title={data.name} back={true}>
      <ScrollView style={styles.container}>
        <View style={{ padding: 16 }}>
          <AppText style={styles.detailHeading}>{data.name}</AppText>
          <AppText style={[styles.detailHeading, { ...STYLE_GLOBAL.body1 }]}>
            {data.intro_content}
          </AppText>
          <HTMLView source={data.content} />
          {dataChild.map((item, index) => {
            return (
              <TouchableOpacity
                key={`${index}${Math.random() * 10000}`}
                onPress={() =>
                  NavigationServices.navigate(SCENE_NAMES.DETAIL_TOPIC_SCREEN, {
                    data: item,
                  })
                }
              >
                <AppText
                  style={{
                    ...STYLE_GLOBAL.title3,
                    marginTop: 16,
                    color: COLOR.BLUE_0,
                  }}
                >
                  {item.name}
                </AppText>
                <HTMLView source={item.content} />
              </TouchableOpacity>
            );
          })}
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.CREATE_EXERCISE_SCREEN, {
                topic: data.name,
              })
            }
          >
            <SVG_NAME.PRACTICE />
            <AppText
              style={{
                color: COLOR.WHILE_0,
                ...STYLE_GLOBAL.body0,
                marginLeft: 8,
              }}
            >
              {t("button.doExercise")}
            </AppText>
          </TouchableOpacity>
        </View>
        {GET.getTagFormula(data.id).length > 0 && (
          <FormulaRelate listFormula={GET.getTagFormula(data.id)} />
        )}
        {GET.getTagTheory(data.id).length > 0 && (
          <TheoryRelate listTheory={GET.getTagTheory(data.id)} />
        )}
        {GET.getTagQuestion(data.id).length > 0 && (
          <QuestionRelate listQuestion={GET.getTagQuestion(data.id)} />
        )}
      </ScrollView>
    </AppContainer>
  );
}
