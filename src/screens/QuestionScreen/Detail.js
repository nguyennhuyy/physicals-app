import React, { useState, useEffect } from "react";
import { ScrollView, View, TouchableOpacity, Dimensions } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppTest from "components/AppTest";
import LectureRelate from "components/Relate/lecture";
import TheoryRelate from "components/Relate/theory";
import FormulaRelate from "components/Relate/formula";
import NavigationServices from "navigation/navigationServices";
import HTMLView from "components/HTMLView";
import { DB_NAME } from "data";
import { GET } from "data/helpers";

export default function Detail({ route }) {
  const { t, i18n } = useTranslate();
  const { data } = route.params;
  // const [likeQuestion, setLikeQuestion] = useState(false);
  const [selectValue, setSelectvalue] = useState("");
  return (
    <AppContainer title={data.name} back={true}>
      <ScrollView style={styles.container}>
        <View style={[styles.content, { paddingBottom: 6 }]}>
          {data.is_check == 1 && (
            <AppTest
              data={data}
              selectValue={selectValue}
              active={true}
              title={data.name}
              description={data.content}
              action={false}
              setValue={setSelectvalue}
            />
          )}
          <TouchableOpacity
            onPress={() =>
              NavigationServices.navigate(SCENE_NAMES.DETAIL_RESULT_SCREEN, {
                dataResult: {
                  id: data.id,
                  question: data,
                  value: selectValue,
                  result: data.correct_answer,
                  value: selectValue,
                  selectAnswer:
                    selectValue !== "" ? data[`answer_${selectValue}`] : "",
                },
                data,
              })
            }
            style={[styles.btn, { backgroundColor: COLOR.BLUE_0 }]}
          >
            <SVG_NAME.ICON_QUESTION_SEE />
            <AppText style={styles.btnText}>
              {t("question.check_guide")}
            </AppText>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[
              styles.btn,
              { backgroundColor: likeQuestion ? COLOR.PINK_0_1 : COLOR.PINK_0 },
            ]}
            onPress={() => setLikeQuestion(!likeQuestion)}
          >
            {likeQuestion ? (
              <SVG_NAME.ICON_QUESTION_LIKE_ACTIVE />
            ) : (
              <SVG_NAME.ICON_QUESTION_LIKE />
            )}
            <AppText
              style={[
                styles.btnText,
                { color: likeQuestion ? COLOR.PINK_0 : COLOR.WHILE_0 },
              ]}
            >
              {likeQuestion ? t('question.un_like') : t('question.like')}
            </AppText>
          </TouchableOpacity> */}
        </View>
        {/* <LectureRelate /> */}
        {GET.getQuestionFormula(data.id).length > 0 && (
          <FormulaRelate listFormula={GET.getQuestionFormula(data.id)} />
        )}
        {GET.getQuestionTheory(data.id).length > 0 && (
          <TheoryRelate listTheory={GET.getQuestionTheory(data.id)} />
        )}
      </ScrollView>
    </AppContainer>
  );
}
