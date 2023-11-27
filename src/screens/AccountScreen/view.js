import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import AppContainer from "components/AppContainer";
import AppText from "components/AppText";
import AppImage from "components/AppImage";
import styles from "./styles";
import { SVG_NAME, IMG_NAME } from "assets/path";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import NavigationServices from "navigation/navigationServices";
import useTranslate from "hooks/useTranslate";

export default function AccountScreen(props) {
  const { syncLevel } = props;
  const { t, i18n } = useTranslate();
  const login = false;

  const profile = {
    name: "Trần Anh Khôi",
    email: "khoitadev@gmail.com",
    avatar: IMG_NAME.AVATAR,
  };
  const data = login
    ? [
        {
          text: t("account.personal"),
          icon: SVG_NAME.PERSONAL,
          screen: SCENE_NAMES.PROFILE_SCREEN,
        },
        {
          text: t("account.update_profile"),
          icon: SVG_NAME.UPDATE_PROFILE,
          screen: SCENE_NAMES.UPDATE_PROFILE_SCREEN,
        },
        {
          text: t("account.facebook"),
          icon: SVG_NAME.FACEBOOK,
          screen: SCENE_NAMES.FACEBOOK_SCREEN,
        },
        {
          text: t("account.language"),
          icon: SVG_NAME.LANGUAGE,
          screen: SCENE_NAMES.LANGUAGE_SCREEN,
        },
        {
          text: t("account.change_pass"),
          icon: SVG_NAME.CHANGE_PASS,
        },
        {
          text: t("account.us"),
          icon: SVG_NAME.US,
          screen: SCENE_NAMES.US_SCREEN,
        },
        {
          text: t("account.logout"),
          icon: SVG_NAME.LOGOUT,
        },
      ]
    : [
        {
          text: t("account.facebook"),
          icon: SVG_NAME.FACEBOOK,
          screen: SCENE_NAMES.FACEBOOK_SCREEN,
        },
        {
          text: t("account.language"),
          icon: SVG_NAME.LANGUAGE,
          screen: SCENE_NAMES.LANGUAGE_SCREEN,
        },
        {
          text: t("account.us"),
          icon: SVG_NAME.US,
          screen: SCENE_NAMES.US_SCREEN,
        },
      ];
  return (
    <AppContainer title={t("navigate:account")}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* {login ? (
            <TouchableOpacity
              style={styles.profile}
              onPress={() =>
                NavigationServices.navigate(SCENE_NAMES.PROFILE_SCREEN, {
                  profile,
                })
              }
            >
              <AppImage source={profile.avatar} style={styles.avatar} />
              <View style={styles.profileContent}>
                <AppText style={styles.profileName}>{profile.name}</AppText>
                <AppText style={styles.profileEmail}>{profile.email}</AppText>
              </View>
              <SVG_NAME.ICON_ARROW_RIGHT />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.auth}>
              <AppText style={styles.authText}>{t('account.auth')}</AppText>
              <SVG_NAME.ICON_ARROW_RIGHT />
            </TouchableOpacity>
          )} */}

          <View style={styles.box}>
            {syncLevel < 2 && (
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                  NavigationServices.navigate(SCENE_NAMES.SYNC_DATA_SCREEN)
                }
              >
                <SVG_NAME.SYNC />
                <AppText style={styles.text}>{t("home.sync")}</AppText>
                <SVG_NAME.ICON_ARROW_RIGHT />
              </TouchableOpacity>
            )}

            {data.map((item, index) => (
              <TouchableOpacity
                key={`${index}${Math.random() * 10000}`}
                style={styles.btn}
                onPress={() =>
                  item.screen &&
                  NavigationServices.navigate(item.screen, {
                    profile,
                  })
                }
              >
                <item.icon />
                <AppText style={styles.text}>{item.text}</AppText>
                <SVG_NAME.ICON_ARROW_RIGHT />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </AppContainer>
  );
}
