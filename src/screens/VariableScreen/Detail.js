import React, { Children } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import LectureRelate from "components/Relate/lecture";
import QuestionRelate from "components/Relate/question";
import TopicRelate from "components/Relate/topic";
import FormulaRelate from "components/Relate/formula";
import NavigationServices from "navigation/navigationServices";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { GET } from "../../data/helpers";

export default function DetailScreen({ route }) {
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
        {GET.getVariableFormula(data.id).length > 0 && (
          <FormulaRelate listFormula={GET.getVariableFormula(data.id)} />
        )}
      </ScrollView>
    </AppContainer>
  );
}
