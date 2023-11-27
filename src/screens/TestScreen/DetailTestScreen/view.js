import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import styles from "../styles";
import AppText from "components/AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import AppContainer from "components/AppContainer";
import AppConfirm from "components/AppConfirm";
import NavigationServices from "navigation/navigationServices";
import { Formik } from "formik";
import AppTextInput from "components/AppTextInput";
import AppSelectItem from "components/AppSelectItem";
import ModalSelectItem from "components/Modal/ModalSelectItem";
import AwareScrollView from "components/AwareScrollView";
import STYLE_GLOBAL from "utils/StyleGlobal";
import {
  CREATE_EXERCISE_FORM_TOPIC_SCHEME,
  CREATE_EXERCISE_FORM_RANDOM_SCHEME,
} from "./validate";
import { DB_NAME } from "../../../data";
import { GET } from "data/helpers/index";

export default function DetailTestView(props) {
  const { route, onSubmit } = props;
  const { data, questionsData } = route.params;
  const { t, i18n } = useTranslate();
  const listTopic = GET.getData({
    name: DB_NAME.TAG,
    search: 'is_deleted="0" && is_published="1" && parent_id = "0"',
  });

  const dataQuestionTopic = listTopic.map((item) => ({
    id: item.id,
    title: item.name,
  }));

  const dataQuestionMode = [
    { id: "1", title: "Ngẫu nhiên" },
    { id: "2", title: "Chọn câu hỏi" },
  ];
  const dataQuestionLevel = [
    { id: "1", title: "Ngẫu nhiên" },
    { id: "2", title: "Dễ" },
    { id: "3", title: "Trung bình" },
    { id: "4", title: "Khó" },
  ];

  const dataQuestionSuggest = [
    { id: "1", title: "Có gợi ý giải" },
    { id: "2", title: "Không có gợi ý giải" },
  ];
  const initValues = {
    totalQuestion: questionsData.length,
    questionTopic: dataQuestionTopic[0],
    questionStart: "1",
    questionEnd: "30",
    questionMode: dataQuestionMode[0],
    questionLevel: dataQuestionLevel[0],
    questionSuggest: dataQuestionSuggest[0],
    workTime: "30",
    name: "",
    total: "",
  };
  const [modalQuestionMode, showModalQuestionMode] = useState(false);
  const [modalQuestionTopic, showModalQuestionTopic] = useState(false);
  const [modalQuestionLevel, showModalQuestionLevel] = useState(false);
  const [modalQuestionSuggest, showModalQuestionSuggest] = useState(false);

  return (
    <Formik
      initialValues={initValues}
      onSubmit={onSubmit}
      validationSchema={
        data.id == 0
          ? CREATE_EXERCISE_FORM_TOPIC_SCHEME
          : CREATE_EXERCISE_FORM_RANDOM_SCHEME
      }
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
            isOpen={modalQuestionTopic}
            onClosed={() => showModalQuestionTopic(false)}
            listData={dataQuestionTopic}
            keyDisplay={"title"}
            title={t("component.select")}
            onPress={(data) => {
              setFieldValue("questionTopic", data);
            }}
          />
          <ModalSelectItem
            isOpen={modalQuestionMode}
            onClosed={() => showModalQuestionMode(false)}
            listData={dataQuestionMode}
            keyDisplay={"title"}
            title={t("component.select")}
            onPress={(data) => {
              setFieldValue("questionMode", data);
            }}
          />
          <ModalSelectItem
            isOpen={modalQuestionLevel}
            onClosed={() => showModalQuestionLevel(false)}
            listData={dataQuestionLevel}
            keyDisplay={"title"}
            title={t("component.select")}
            onPress={(data) => {
              setFieldValue("questionLevel", data);
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
          <AppContainer title={data.detail} back={true}>
            <AwareScrollView style={styles.container}>
              <View style={styles.content}>
                <AppText style={styles.heading_3}>
                  {t("exercise.create.information")}
                </AppText>
                {data.id === 0 && (
                  <AppSelectItem
                    placeholder={t("exercise.create.topic")}
                    title={
                      values.questionTopic &&
                      Object.keys(values.questionTopic).length > 0
                        ? values.questionTopic.title
                        : ""
                    }
                    data={values.questionTopic}
                    onPress={() => {
                      showModalQuestionTopic(true);
                    }}
                  />
                )}

                {data.id === 0 && (
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
                )}
                {data.id === 0 && (
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
                      showModalQuestionMode(true);
                    }}
                  />
                )}
                {data.id === 0 && (
                  <AppTextInput
                    value={values.questionStart}
                    label={t("exercise.create.start")}
                    onChangeText={handleChange("questionStart")}
                    error={touched.questionStart && errors.questionStart}
                    messageError={t(errors.questionStart)}
                    keyboardType="number-pad"
                  />
                )}
                {data.id === 0 && (
                  <AppTextInput
                    value={values.questionEnd}
                    label={t("exercise.create.end")}
                    onChangeText={handleChange("questionEnd")}
                    error={touched.questionEnd && errors.questionEnd}
                    messageError={t(errors.questionEnd)}
                    keyboardType="number-pad"
                  />
                )}
                {data.id === 1 && (
                  <AppTextInput
                    value={values.name}
                    label={t("exercise.create.name")}
                    onChangeText={handleChange("name")}
                    error={touched.name && errors.name}
                    messageError={t(errors.name)}
                  />
                )}
                {data.id === 1 && (
                  <AppTextInput
                    value={values.total}
                    label={t("exercise.create.count")}
                    onChangeText={handleChange("total")}
                    error={touched.total && errors.total}
                    messageError={t(errors.total)}
                    keyboardType="number-pad"
                  />
                )}
                {data.id === 1 && (
                  <AppSelectItem
                    placeholder={t("exercise.create.level")}
                    title={
                      values.questionLevel &&
                      Object.keys(values.questionLevel).length > 0
                        ? values.questionLevel.title
                        : ""
                    }
                    data={values.questionLevel}
                    onPress={() => {
                      showModalQuestionLevel(true);
                    }}
                  />
                )}

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
              disable={false}
              confirmText={t("button.init")}
              cancel={false}
              onPress={() => {
                handleSubmit();
              }}
            />
          </AppContainer>
        </>
      )}
    </Formik>
  );
}
