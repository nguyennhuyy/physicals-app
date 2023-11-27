import React from "react";
import useTranslate from "hooks/useTranslate";
import CategoriesScreenView from "./view.js";
import { IMG_NAME, SVG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";

const CategoriesScreen = ({ type, route }) => {
  const { t, i18n } = useTranslate();
  const categories = [
    {
      bgBtn: COLOR.PINK_0_1,
      text: t("category.formula"),
      icon: SVG_NAME.ICON1,
      screen: SCENE_NAMES.FORMULA_SCREEN,
    },
    {
      bgBtn: COLOR.PURPLE_0_1,
      text: t("category.variable"),
      icon: SVG_NAME.ICON2,
      screen: SCENE_NAMES.VARIABLE_SCREEN,
    },
    {
      bgBtn: COLOR.PINK_0_1,
      text: t("category.constant"),
      icon: SVG_NAME.ICON3,
      screen: SCENE_NAMES.CONSTANT_SCREEN,
    },
    // {
    //   bgBtn: COLOR.GREEN_0_1,
    //   text: t("category.lecture"),
    //   icon: SVG_NAME.ICON4,
    //   screen: SCENE_NAMES.LECTURE_SCREEN,
    // },
    {
      bgBtn: COLOR.YELLOW_0_1,
      text: t("category.theory"),
      icon: SVG_NAME.ICON5,
      screen: SCENE_NAMES.THEORY_SCREEN,
    },
    // {
    //   bgBtn: COLOR.PURPLE_0_1,
    //   text: t('category.test'),
    //   icon: SVG_NAME.ICON6,
    //   screen: SCENE_NAMES.TEST_SCREEN,
    // },
    {
      bgBtn: COLOR.GREEN_1_1,
      text: t("category.question"),
      icon: SVG_NAME.ICON7,
      screen: SCENE_NAMES.QUESTION_SCREEN,
    },
    {
      bgBtn: COLOR.RED_0_1,
      text: t("category.topic"),
      icon: SVG_NAME.ICON8,
      screen: SCENE_NAMES.TOPIC_SCREEN,
    },
    // {
    //   bgBtn: COLOR.GREEN_0_1,
    //   text: t('category.solution'),
    //   icon: SVG_NAME.ICON9,
    // },
    {
      bgBtn: COLOR.YELLOW_0_1,
      text: t("category.manage"),
      icon: SVG_NAME.ICON10,
      screen: SCENE_NAMES.MANAGE_EXERCISE_SCREEN,
    },
    // {
    //   bgBtn: COLOR.PINK_0_1,
    //   text: t('category.support'),
    //   icon: SVG_NAME.ICON11,
    // },
  ];

  return (
    <CategoriesScreenView listCategory={categories} type={type} route={route} />
  );
};

export default React.memo(CategoriesScreen);
