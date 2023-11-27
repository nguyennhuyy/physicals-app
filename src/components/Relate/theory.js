import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import ItemTheory from "screens/QuestionScreen/Item";

export default function TheoryRelate(props) {
  const { listTheory } = props;
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.theory")} type={2} />
      <View style={{ padding: 16, paddingBottom: 4 }}>
        {listTheory.map((item, index) => (
          <ItemTheory key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
