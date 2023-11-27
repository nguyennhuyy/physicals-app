import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import ItemQuestion from "screens/QuestionScreen/Item";

export default function QuestionRelate(props) {
  const { listQuestion } = props;
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.question")} type={2} />
      <View style={{ padding: 16 }}>
        {listQuestion.map((item, index) => (
          <ItemQuestion key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
