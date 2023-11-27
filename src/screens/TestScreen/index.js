import React from "react";
import TestViewScreen from "./view";
import useTranslate from "hooks/useTranslate";
import { IMG_NAME, SVG_NAME } from "assets/path";

const TestScreen = (props) => {
  const { route } = props;
  const { t, i18n } = useTranslate();
  const dataTypes = [
    {
      id: 0,
      title: t("test.title_1"),
      detail: t("test.detail_1"),
      description: t("test.description_1"),
      icon: SVG_NAME.ICON_TEST_TOPIC,
    },
    {
      id: 1,
      title: t("test.title_2"),
      detail: t("test.detail_2"),
      description: t("test.description_2"),
      icon: SVG_NAME.ICON_TEST_RANDOM,
    },
    // {
    //   id: 2,
    //   title: t('test.title_3'),
    //   detail: t('test.detail_3'),
    //   description: t('test.description_3'),
    //   icon: SVG_NAME.ICON_TEST_LIKE,
    // },
  ];
  return <TestViewScreen route={route} dataTypes={dataTypes} />;
};

export default React.memo(TestScreen);
