import React, { useState } from "react";
import { SCENE_NAMES } from "utils/AppConst";
import useTranslate from "hooks/useTranslate";
import NavigationServices from "navigation/navigationServices";
import CreateExerciseView from "./view";
import { DB_NAME } from "data";
import { GET } from "data/helpers";

export default function CreateExerciseScreen(props) {
  const { t, i18n } = useTranslate();
  const { route } = props;
  const { topic } = route.params;

  const onSubmit = (submitData) => {
    const questionsData = GET.getQuestion({
      skip: +submitData.questionStart,
      limit: +submitData.questionEnd - +submitData.questionStart + 1,
    });
    const dataRow = [
      {
        title: t("test.exam_code"),
        text: "10433",
      },
      {
        title: t("test.exam_title"),
        text: topic,
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
    ];

    NavigationServices.navigate(SCENE_NAMES.AFTER_CREATE_EXERCISE_SCREEN, {
      questionsData,
      dataRow,
      topic,
      submitData,
    });
  };
  return <CreateExerciseView onSubmit={onSubmit} route={route} />;
}
