/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, StyleSheet, View } from "react-native";
import React, { useMemo } from "react";
import AppText from "../AppText";
import { IMG_NAME, SVG_NAME } from "assets/path";
import HTMLView from "components/HTMLView";
import STYLE_GLOBAL from "utils/StyleGlobal";

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    ...STYLE_GLOBAL.shadowDefault,

    borderRadius: 16,
    marginBottom: 16,
  },
  text: {
    marginLeft: 8,
    ...STYLE_GLOBAL.body0,
  },
});

function AppRadio({ text, style, onPress, type, active }) {
  return (
    <TouchableOpacity
      activeOpacity={1}
      disabled={type === "detail"}
      style={[styles.box, style]}
      onPress={onPress}
    >
      {active ? (
        type === "detail" ? (
          <SVG_NAME.RADIO_DISABLE />
        ) : (
          <SVG_NAME.RADIO_ACTIVE />
        )
      ) : (
        <SVG_NAME.RADIO_INACTIVE />
      )}

      {text.includes("<p") ? (
        <HTMLView
          source={text}
          style={styles.text}
          styleBox={text.includes("<math") && { marginBottom: -10 }}
        />
      ) : (
        <AppText style={styles.text}>{text}</AppText>
      )}
    </TouchableOpacity>
  );
}

export default React.memo(AppRadio);
