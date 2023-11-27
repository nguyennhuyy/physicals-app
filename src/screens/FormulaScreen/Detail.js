import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import NavigationServices from "navigation/navigationServices";
import VariableRelate from "components/Relate/variable";
import TopicRelate from "components/Relate/topic";
import QuestionRelate from "components/Relate/question";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { DB_NAME } from "../../data";
import { GET } from "data/helpers/index";

export default function FormulaScreen({ route }) {
  const { t, i18n } = useTranslate();
  const { data } = route.params;
  return (
    <AppContainer title={data.name} back={true}>
      <ScrollView
        style={[styles.container, { backgroundColor: COLOR.WHILE_0 }]}
      >
        <View style={styles.content}>
          <AppText style={styles.heading_1}>{data.name}</AppText>
          <MATHView formula={data.display} />
          <HTMLView source={data.content} />

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
          {data.image_one !== null && data.image_one !== "" && (
            <AppImage source={data.image_one} style={styles.image} />
          )}
        </View>
        {GET.getFormulaVariable(data.id).length > 0 && (
          <VariableRelate listVariable={GET.getFormulaVariable(data.id)} />
        )}
        {GET.getFormulaTag(data.id).length > 0 && (
          <TopicRelate listTopic={GET.getFormulaTag(data.id)} />
        )}
        {GET.getFormulaQuestion(data.id).length > 0 && (
          <QuestionRelate listQuestion={GET.getFormulaQuestion(data.id)} />
        )}
        {/* <LectureRelate /> */}
      </ScrollView>
    </AppContainer>
  );
}
