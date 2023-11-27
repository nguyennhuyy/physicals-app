import React, { useState } from "react";
import { SCENE_NAMES } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";
import NavigationServices from "navigation/navigationServices";
import CreateExerciseView from "./view";
import { DB_NAME } from "../../../data";
import { GET } from "data/helpers/index";
const questions = GET.getData({
  name: DB_NAME.QUESTION,
  search: 'is_deleted="0" && is_published="1" && is_multiple_choice = "1"',
});
export default function CreateExerciseScreen(props) {
  const { t, i18n } = useTranslate();
  const { route } = props;
  const { data } = route.params;

  const onSubmit = (submitData) => {
    const questionsData = GET.getQuestion({
      name: DB_NAME.QUESTION,
      skip: +submitData.questionStart,
      limit:
        data.id == 0
          ? +submitData.questionEnd - +submitData.questionStart + 1
          : submitData.total,
    });
    let dataRows = [
      [
        {
          title: t("test.exam_code"),
          text: "10433",
        },
        {
          title: t("test.exam_title"),
          text: submitData.questionTopic.title,
        },
        {
          title: t("exercise.create.mode_test"),
          text: submitData.questionMode.title,
        },
        {
          title: t("exercise.create.time"),
          text: submitData.workTime,
        },
        {
          title: t("exercise.create.sum_total"),
          text: +submitData.questionEnd - +submitData.questionStart + 1,
        },
        {
          title: t("exercise.create.suggest"),
          text: submitData.questionSuggest.title,
        },
        {
          title: t("exercise.create.start"),
          text: submitData.questionStart,
        },
        {
          title: t("exercise.create.end"),
          text: submitData.questionEnd,
        },
      ],
      [
        {
          title: t("test.exam_code"),
          text: "10433",
        },
        {
          title: t("test.exam_title"),
          text: submitData.name,
        },
        {
          title: t("exercise.create.level"),
          text: submitData.questionLevel.title,
        },
        {
          title: t("exercise.create.time"),
          text: submitData.workTime,
        },
        {
          title: t("exercise.create.sum_total"),
          text: submitData.total,
        },
        {
          title: t("exercise.create.suggest"),
          text: submitData.questionSuggest.title,
        },
      ],
    ];

    NavigationServices.navigate(SCENE_NAMES.AFTER_CREATE_EXERCISE_SCREEN, {
      questionsData,
      dataRow: dataRows[data.id],
      topic: data.detail,
      submitData,
    });
  };
  return (
    <CreateExerciseView
      onSubmit={onSubmit}
      route={route}
      questionsData={questions}
    />
  );
}
