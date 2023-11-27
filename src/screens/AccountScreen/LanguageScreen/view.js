import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import styles from "./styles";
import { SVG_NAME } from "assets/path";
import APIUtils from "utils/apiUtils";
import useTranslate from "hooks/useTranslate";

export default function LanguageScreen() {
  const { t, i18n } = useTranslate();
  const [languages, setLanguages] = useState([
    {
      text: t("language.vi"),
      active: i18n.language === "vi",
      icon: SVG_NAME.ICON_LANGUAGE_VI,
      code: "vi",
    },
    {
      text: t("language.en"),
      active: i18n.language === "en",
      icon: SVG_NAME.ICON_LANGUAGE_EN,
      code: "en",
    },
  ]);
  const setLanguage = (code) => {
    if (code === "vi") {
      APIUtils.changeCurrentLanguage("vn");
    } else if (code === "en") {
      APIUtils.changeCurrentLanguage("en");
    }
    return i18n.changeLanguage(code);
  };
  return (
    <AppContainer title={t("account.language")} back={true}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {languages.map((language, index) => (
            <TouchableOpacity
              key={`${index}${Math.random() * 10000}`}
              style={styles.language}
              onPress={() => {
                setLanguages(
                  languages.map((item) => {
                    item.active = language.text === item.text;
                    return item;
                  })
                );
                setLanguage(languages.find((item) => item.active).code);
              }}
            >
              <language.icon />
              <AppText style={styles.languageText}>{language.text}</AppText>
              {language.active ? (
                <SVG_NAME.RADIO_ACTIVE />
              ) : (
                <SVG_NAME.RADIO_INACTIVE />
              )}
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </AppContainer>
  );
}
