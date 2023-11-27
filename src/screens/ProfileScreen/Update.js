import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import styles from "./styles";
import AppImage from "components/AppImage";
import { SVG_NAME } from "assets/path";
import APIUtils from "utils/apiUtils";
import useTranslate from "hooks/useTranslate";

export default function LanguageScreen({ route }) {
  const { t, i18n } = useTranslate();
  const { profile } = route.params;

  return (
    <AppContainer title={t("account.update_profile")} back={true}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <AppText style={styles.heading}>{t("profile.avatar")}</AppText>
          <View style={styles.avatarContain}>
            <AppImage source={profile.avatar} style={styles.avatarProfile} />
          </View>
          <TouchableOpacity style={{ marginVertical: 12 }}>
            <AppText style={styles.avatarUpdate}>
              {t("profile.update_avatar")}
            </AppText>
          </TouchableOpacity>
          <AppText style={styles.heading}>{t("profile.information")}</AppText>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
