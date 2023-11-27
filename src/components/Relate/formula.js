import React from "react";
import { View } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppHeading from "components/AppHeading";
import ItemFormula from "screens/FormulaScreen/Item";

export default function FormulaRelate(props) {
  const { listFormula } = props;
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppHeading title={t("relate.formula")} type={2} />
      <View style={{ padding: 16, paddingBottom: 4 }}>
        {listFormula.map((item, index) => (
          <ItemFormula key={`${index}${Math.random() * 10000}`} item={item} />
        ))}
      </View>
    </View>
  );
}
