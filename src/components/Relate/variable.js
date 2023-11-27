import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import ItemVariable from "screens/VariableScreen/Item";

export default function VariableRelate(props) {
  const { listVariable } = props;
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.variable")} type={2} />
      <View style={{ padding: 16, paddingBottom: 4 }}>
        {listVariable.map((item, index) => (
          <ItemVariable key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
