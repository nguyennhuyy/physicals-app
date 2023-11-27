import { View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import styles from "./styles";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { SVG_NAME } from "assets/path";
import AppText from "components/AppText";
import useTranslate from "hooks/useTranslate";
import APIUtils from "utils/apiUtils";

export default function OnBoardingView({ onPressStart }) {
  const { t, i18n } = useTranslate();
  const setLanguage = (code) => {
    if (code === "vi") {
      APIUtils.changeCurrentLanguage("vn");
    } else if (code === "en") {
      APIUtils.changeCurrentLanguage("en");
    }
    return i18n.changeLanguage(code);
  };
  useEffect(() => {
    setLanguage("vi");
  }, []);

  const [index, setIndex] = useState(0);

  const Process = ({ style }) => {
    return (
      <View style={[styles.row, style]}>
        <View
          style={[
            styles.dot,
            Number(index) > 0 ? styles.dotActive : styles.activeDot,
            Number(index) === 2 && styles.colorYellow,
          ]}
        />
        <View
          style={[
            styles.dot,
            Number(index) > 1
              ? styles.dotActive
              : Number(index) === 1 && styles.activeDot,
            Number(index) === 2 && styles.colorYellow,
          ]}
        />
        <View
          style={[
            styles.dot,
            Number(index) >= 2 && {
              ...styles.activeDot,
              ...styles.colorYellow,
            },
          ]}
        />
      </View>
    );
  };

  return (
    <View style={[STYLE_GLOBAL.flex1, styles.container]}>
      <View style={STYLE_GLOBAL.flex1}>
        <View style={styles.content}>
          {index === 0 && <SVG_NAME.BACKGROUND_1 />}
          {index === 1 && <SVG_NAME.BACKGROUND_2 />}
          {index === 2 && <SVG_NAME.BACKGROUND_3 />}
        </View>
        <View style={styles.body}>
          {index === 0 && (
            <View style={styles.contentContainer}>
              <AppText style={[styles.contentTitle, STYLE_GLOBAL.title1]}>
                {t("onBoarding.title1")}
              </AppText>
              <AppText style={[styles.contentSubTitle, STYLE_GLOBAL.body1]}>
                {t("onBoarding.content1")}
              </AppText>
            </View>
          )}
          {index === 1 && (
            <View style={styles.contentContainer}>
              <AppText style={[styles.contentTitle, STYLE_GLOBAL.title1]}>
                {t("onBoarding.title2")}
              </AppText>
              <AppText style={[styles.contentSubTitle, STYLE_GLOBAL.body1]}>
                {t("onBoarding.content2")}
              </AppText>
            </View>
          )}
          {index === 2 && (
            <View style={styles.contentContainer}>
              <AppText style={[styles.contentTitle, STYLE_GLOBAL.title1]}>
                {t("onBoarding.title3")}
              </AppText>
              <AppText style={[styles.contentSubTitle, STYLE_GLOBAL.body1]}>
                {t("onBoarding.content3")}
              </AppText>
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <View style={styles.action}>
            <View>
              <Process style={styles.processBar} />
            </View>

            <View style={styles.boxButton}>
              {/* {index > 0 && (
              <TouchableOpacity
                style={styles.buttonReturn}
                activeOpacity={1}
                onPress={() => {
                  setIndex((old) => old - 1);
                }}
              >
                <AppText style={[STYLE_GLOBAL.body1, styles.colorGray]}>
                  {t('onBoarding.return')}
                </AppText>
              </TouchableOpacity>
            )} */}
              {index === 2 ? (
                <TouchableOpacity
                  style={styles.buttonStart}
                  activeOpacity={1}
                  onPress={() => {
                    onPressStart();
                  }}
                >
                  <AppText style={[STYLE_GLOBAL.body1, styles.colorWhile]}>
                    {t("onBoarding.start")}
                  </AppText>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.buttonNext}
                  activeOpacity={1}
                  onPress={() => {
                    setIndex((old) => old + 1);
                  }}
                >
                  <AppText style={[STYLE_GLOBAL.body1, styles.colorPrimary]}>
                    {t("onBoarding.nextTo")}
                  </AppText>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          onPressStart();
        }}
        style={styles.skip}
      >
        <AppText style={styles.skipText}>{t("onBoarding.skip")}</AppText>
      </TouchableOpacity>
    </View>
  );
}
