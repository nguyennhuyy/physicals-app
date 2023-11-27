/* eslint-disable react-native/no-inline-styles */
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import AppText from "components/AppText";
import { COLOR } from "utils/AppConst";
import styles from "./styles";
import { SVG_NAME } from "assets/path";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { scalePortrait } from "utils/responsive";

function AppSelectItem({
  data,
  onPress,
  title,
  style,
  placeholder,
  date,
  styleTxt,
  uppercase,
}) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.boxSelect, style]}
      onPress={onPress}
    >
      <View style={STYLE_GLOBAL.flex1}>
        {title === "" ? (
          <AppText
            style={[
              styles.placeholderJob,
              uppercase && { textTransform: "uppercase" },
              {
                fontSize: scalePortrait(12, 16),
                fontWeight: "400",
              },
              styleTxt,
            ]}
          >
            {placeholder}
          </AppText>
        ) : (
          <View>
            <AppText
              style={[
                styles.placeholderJob,
                uppercase && { textTransform: "uppercase" },
                {
                  fontSize: scalePortrait(8, 13),
                  fontWeight: "400",
                },
              ]}
            >
              {placeholder}
            </AppText>
            <AppText
              numberOfLines={1}
              style={[styles.selectJob, STYLE_GLOBAL.body1, styleTxt]}
            >
              {title}
            </AppText>
          </View>
        )}
      </View>
      <View style={styles.icArrowBottom}>
        <SVG_NAME.ARROW_DOWN_GRAY />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(AppSelectItem);
