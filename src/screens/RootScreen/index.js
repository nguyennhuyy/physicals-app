import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useTranslate from "hooks/useTranslate";
import HomeScreen from "screens/HomeScreen";
import ArticleScreen from "screens/ArticleScreen";
import PracticeScreen from "screens/PracticeScreen";
import TestScreen from "screens/TestScreen";
import AccountScreen from "screens/AccountScreen";

import { SVG_NAME, IMG_NAME } from "assets/path";
import AppText from "components/AppText";
import { COLOR, SCENE_NAMES } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { Platform, View } from "react-native";
// import CustomerListScreen from "screens/Customer/CustomerListScreen";
import { scaleLandscape, scalePortrait } from "utils/responsive";
// import App from 'src/App';

const Tab = createBottomTabNavigator();

const CustomTabTint = ({ focused, title, style }) => {
  return (
    <AppText
      numberOfLines={1}
      style={[
        {
          letterSpacing: 0.4,
          color: COLOR.WHILE_0,
          fontSize: scalePortrait(10, 14),
          ...STYLE_GLOBAL.body2,
          fontWeight: focused ? "600" : "400",
          marginLeft: Platform.isPad ? 20 : 0,
        },
        style,
      ]}
    >
      {title}
    </AppText>
  );
};
function RootScreen() {
  const { t, i18n } = useTranslate();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          ...Platform.select({
            ios: {
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.1,
              shadowRadius: 24,

              shadowColor: COLOR.GRAY_0,
            },
            android: {
              backgroundColor: "#fff",
              elevation: 10,
            },
          }),
          backgroundColor: COLOR.PRIMARY,
          // height: 60,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <CustomTabTint focused={focused} title={t("navigate:home")} />
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SVG_NAME.ICON_HOME_ACTIVE />;
            return <SVG_NAME.ICON_HOME />;
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <CustomTabTint focused={focused} title={t("navigate:article")} />
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SVG_NAME.ICON_ARTICLE_ACTIVE />;
            return <SVG_NAME.ICON_ARTICLE />;
          },
        }}
        name="Article"
        component={ArticleScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <CustomTabTint focused={focused} title={t("navigate:practice")} />
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SVG_NAME.ICON_PRACTICE_ACTIVE />;
            return <SVG_NAME.ICON_PRACTICE />;
          },
        }}
        name="Practice"
        component={TestScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused, color }) => {
            return (
              <CustomTabTint focused={focused} title={t("navigate:account")} />
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <SVG_NAME.ICON_ACCOUNT_ACTIVE />;
            return <SVG_NAME.ICON_ACCOUNT />;
          },
        }}
        name="Account"
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}
export default RootScreen;
