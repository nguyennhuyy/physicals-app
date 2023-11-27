import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import useTranslate from "hooks/useTranslate";
import AppText from "components/AppText";
import STYLE_GLOBAL from "utils/StyleGlobal";
import AppRadio from "components/AppRadio";
import AppButton from "components/AppButton";
import { COLOR } from "utils/AppConst";
import MATHView from "components/MATHView";
import HTMLView from "components/HTMLView";

const styles = StyleSheet.create({
  title: { ...STYLE_GLOBAL.title2, marginBottom: 24 },
  description: { ...STYLE_GLOBAL.body1, marginBottom: 16 },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

function AppTest({
  data,
  title,
  selectValue,
  description,
  disable = false,
  active = false,
  type = "test",
  action = true,
  setValue,
  onPressSub,
  onPress,
  listTest,
  setSelectAnswer,
  setDataAnswer,
}) {
  const { t, i18n } = useTranslate();
  return (
    <View>
      <AppText style={styles.title}>{title}</AppText>
      {description &&
        (description.includes("<p") ? (
          <HTMLView source={description} styleBox={{ marginBottom: 10 }} />
        ) : (
          <AppText style={styles.description}>{description}</AppText>
        ))}
      {data.is_multiple_choice == 1 && (
        <View>
          <AppRadio
            text={data.answer_a}
            active={"A" === selectValue}
            type={type}
            onPress={() => {
              setValue("A");
            }}
          />
          <AppRadio
            text={data.answer_b}
            active={"B" === selectValue}
            type={type}
            onPress={() => {
              setValue("B");
            }}
          />
          <AppRadio
            text={data.answer_c}
            active={"C" === selectValue}
            type={type}
            onPress={() => {
              setValue("C");
            }}
          />
          <AppRadio
            text={data.answer_d}
            active={"D" === selectValue}
            type={type}
            onPress={() => {
              setValue("D");
            }}
          />
        </View>
      )}

      {type === "test" && action && (
        <View style={styles.action}>
          <AppButton
            disable={disable}
            text={t("button.return")}
            color={active ? COLOR.YELLOW_0 : COLOR.GRAY_5}
            bgc={active ? COLOR.YELLOW_0_1 : COLOR.BACK_GROUND_0}
            style={{ paddingVertical: 8 }}
            onPress={onPressSub}
          />
          <AppButton
            text={t("button.nextTo")}
            color={COLOR.WHILE_0}
            bgc={COLOR.YELLOW_0}
            style={{ paddingVertical: 8 }}
            onPress={onPress}
          />
        </View>
      )}
    </View>
  );
}

export default React.memo(AppTest);
