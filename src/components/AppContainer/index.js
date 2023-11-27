/* eslint-disable no-lone-blocks */
/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar,
  View,
} from "react-native";
import { IMG_NAME, SVG_NAME } from "assets/path";
import NavigationServices from "navigation/navigationServices";
import STYLE_GLOBAL from "utils/StyleGlobal";
import AppText from "components/AppText";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
const AppContainer = ({
  style,
  hide = false,
  back = false,
  search = false,
  close = false,
  reload = false,
  menu = false,
  test = false,
  children,
  onReload,
  onMenu,
  onClose,
  stackScreen = false,
  title,
  greeting,
  onBack = false,
}) => {
  const minute = title.split(":")[0];
  return (
    <View style={styles.container}>
      {!hide ? (
        <View style={styles.header}>
          {greeting ? (
            <View
              style={[
                styles.headerWrap,
                { flexDirection: "row", justifyContent: "space-between" },
              ]}
            >
              <View>
                <AppText style={styles.headerTitle}>{title}</AppText>
                <AppText style={styles.headerGreeting}>{greeting}</AppText>
              </View>
              <TouchableOpacity
                style={{ padding: 8 }}
                onPress={() =>
                  NavigationServices.navigate(SCENE_NAMES.SEARCH_SCREEN)
                }
              >
                <SVG_NAME.SEARCH />
              </TouchableOpacity>
              {/* <AppImage source={IMG_NAME.AVATAR} style={styles.avatar} /> */}
            </View>
          ) : (
            <View style={styles.headerWrap}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {back && (
                  <TouchableOpacity
                    style={{ padding: 8 }}
                    onPress={
                      onBack ? onBack : () => NavigationServices.goBack()
                    }
                  >
                    <SVG_NAME.ICON_BACK />
                  </TouchableOpacity>
                )}
                {close && (
                  <TouchableOpacity onPress={onClose} style={{ padding: 8 }}>
                    <SVG_NAME.CLOSE_ICON />
                  </TouchableOpacity>
                )}
                {test && <View style={{ width: 40 }}></View>}
                {test ? (
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <View style={styles.headerTestWrap}>
                      {minute < 2 ? (
                        <SVG_NAME.CLOCK_ICON_2 />
                      ) : (
                        <SVG_NAME.CLOCK_ICON />
                      )}

                      <AppText
                        numberOfLines={1}
                        style={[
                          styles.headerTest,
                          minute < 2 && { color: COLOR.RED_0 },
                        ]}
                      >
                        {title}
                      </AppText>
                    </View>
                  </View>
                ) : (
                  <AppText numberOfLines={1} style={styles.headerContent}>
                    {title}
                  </AppText>
                )}
                {search && (
                  <TouchableOpacity
                    style={{ padding: 8 }}
                    onPress={() =>
                      NavigationServices.navigate(SCENE_NAMES.SEARCH_SCREEN, {
                        title,
                      })
                    }
                  >
                    <SVG_NAME.SEARCH />
                  </TouchableOpacity>
                )}
                {back && !search && <View style={{ width: 40 }}></View>}
                {reload && (
                  <TouchableOpacity onPress={onReload} style={{ padding: 8 }}>
                    <SVG_NAME.RELOAD_ICON />
                  </TouchableOpacity>
                )}
                {menu && (
                  <TouchableOpacity onPress={onMenu} style={{ padding: 8 }}>
                    <SVG_NAME.MENU_ICON />
                  </TouchableOpacity>
                )}
              </View>
            </View>
          )}
        </View>
      ) : (
        <View style={[]} />
      )}
      <View
        style={[
          { flex: 1, height: "100%", width: "100%", backgroundColor: "#fff" },
          style,
        ]}
      >
        {children}
      </View>
    </View>
  );
};
export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHILE_0,
    height: "100%",
    width: "100%",
  },
  header: {
    backgroundColor: COLOR.PRIMARY,
  },
  headerWrap: {
    marginTop: 40,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  headerTitle: {
    ...STYLE_GLOBAL.title2,
    color: COLOR.WHILE_0,
    marginBottom: 4,
  },
  headerTestWrap: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    borderRadius: 100,
    backgroundColor: COLOR.WHILE_0,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignSelf: "center",
  },
  headerTest: {
    ...STYLE_GLOBAL.title1,
    color: COLOR.PRIMARY,
    marginLeft: 4,
  },
  headerContent: {
    color: COLOR.WHILE_0,
    flex: 1,
    ...STYLE_GLOBAL.title1,
    marginVertical: 12,
    marginHorizontal: 20,
    textAlign: "center",
  },
  headerGreeting: {
    color: COLOR.WHILE_0,
    ...STYLE_GLOBAL.body2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderColor: COLOR.WHILE_0,
    borderWidth: 2,
  },
});
