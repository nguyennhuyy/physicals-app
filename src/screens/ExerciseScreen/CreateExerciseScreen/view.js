import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "./styles";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppConfirm from "components/AppConfirm";
import { Formik } from "formik";
import AppTextInput from "components/AppTextInput";
import AppSelectItem from "components/AppSelectItem";
import ModalSelectItem from "components/Modal/ModalSelectItem";
import AwareScrollView from "components/AwareScrollView";
import { CREATE_EXERCISE_FORM_SCHEME } from "./validate";
import { DB_NAME } from "../../../data";
import { GET } from "data/helpers/index";

const dataQuestionMode = [
  { id: "1", title: "Ngẫu nhiên" },
  { id: "2", title: "Chọn câu hỏi" },
];

const dataQuestionSuggest = [
  { id: "1", title: "Có gợi ý giải" },
  { id: "2", title: "Không có gợi ý giải" },
];

function CreateExerciseView(props) {
  const { route, onSubmit } = props;
  const { t, i18n } = useTranslate();
  const { topic } = route.params;
  const questionsData = GET.getData({
    name: DB_NAME.QUESTION,
    search: 'is_deleted="0" && is_published="1" && is_multiple_choice = "1"',
  });
  const initValues = {
    totalQuestion: questionsData.length,
    questionStart: "1",
    questionEnd: "10",
    questionMode: { id: "1", title: "Ngẫu nhiên" },
    questionSuggest: { id: "2", title: "Không có gợi ý giải" },
    workTime: "10",
  };

  const [modalQuestionMode, showModalQuestion] = useState(false);
  const [modalQuestionSuggest, showModalQuestionSuggest] = useState(false);
  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={CREATE_EXERCISE_FORM_SCHEME}
    >
      {({
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
        handleSubmit,
      }) => (
        <>
          <ModalSelectItem
            isOpen={modalQuestionMode}
            onClosed={() => showModalQuestion(false)}
            listData={dataQuestionMode}
            keyDisplay={"title"}
            title={t("component.select")}
            onPress={(data) => {
              setFieldValue("questionMode", data);
            }}
          />

          <ModalSelectItem
            isOpen={modalQuestionSuggest}
            onClosed={() => showModalQuestionSuggest(false)}
            listData={dataQuestionSuggest}
            keyDisplay={"title"}
            title={t("component.select")}
            onPress={(data) => {
              setFieldValue("questionSuggest", data);
            }}
          />
          <AppContainer title={topic} back={true}>
            <AwareScrollView style={styles.container}>
              <View style={styles.content}>
                <AppText style={styles.heading_3}>
                  {t("exercise.create.information")}
                </AppText>
                <View style={styles.box}>
                  <AppText style={styles.boxTitle}>
                    {t("exercise.create.topic")}
                  </AppText>
                  <AppText style={[styles.boxText, { color: COLOR.GRAY_4 }]}>
                    {topic}
                  </AppText>
                </View>
                <View style={styles.note}>
                  <SVG_NAME.QUOTES />
                  <AppText
                    style={{
                      marginLeft: 8,
                      color: COLOR.GRAY_4,
                      flex: 1,
                    }}
                  >
                    {t("exercise.create.relate_1")}
                    <AppText style={{ color: COLOR.RED_0 }}>
                      {questionsData.length}
                    </AppText>
                    {t("exercise.create.relate_2")}
                  </AppText>
                </View>

                <AppTextInput
                  value={values.questionStart}
                  label={t("exercise.create.start")}
                  onChangeText={handleChange("questionStart")}
                  error={touched.questionStart && errors.questionStart}
                  messageError={t(errors.questionStart)}
                  keyboardType="number-pad"
                />

                <AppTextInput
                  value={values.questionEnd}
                  label={t("exercise.create.end")}
                  onChangeText={handleChange("questionEnd")}
                  error={touched.questionEnd && errors.questionEnd}
                  messageError={t(errors.questionEnd)}
                  keyboardType="number-pad"
                />

                <AppSelectItem
                  placeholder={t("exercise.create.mode")}
                  title={
                    values.questionMode &&
                    Object.keys(values.questionMode).length > 0
                      ? values.questionMode.title
                      : ""
                  }
                  data={values.questionMode}
                  onPress={() => {
                    showModalQuestion(true);
                  }}
                />

                <AppSelectItem
                  placeholder={t("exercise.create.suggest")}
                  title={
                    values.questionSuggest &&
                    Object.keys(values.questionSuggest).length > 0
                      ? values.questionSuggest.title
                      : ""
                  }
                  data={values.questionSuggest}
                  onPress={() => {
                    showModalQuestionSuggest(true);
                  }}
                />

                <AppTextInput
                  value={values.workTime}
                  label={t("exercise.create.time")}
                  onChangeText={handleChange("workTime")}
                  error={touched.workTime && errors.workTime}
                  messageError={t(errors.workTime)}
                  keyboardType="number-pad"
                />
              </View>
            </AwareScrollView>
            <AppConfirm
              confirmText={t("button.init")}
              cancelText={t("button.cancel")}
              onPress={handleSubmit}
            />
          </AppContainer>
        </>
      )}
    </Formik>
  );
}

export default React.memo(CreateExerciseView);
