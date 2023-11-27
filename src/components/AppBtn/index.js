import React from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import AppText from "components/AppText";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    marginRight: 10,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

function AppBtn({ text, bgc, color, active, style, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { backgroundColor: active ? color : bgc, ...style }]}
    >
      <AppText
        style={{
          color: active ? COLOR.WHILE_0 : color || COLOR.WHILE_0,
          ...STYLE_GLOBAL.body1,
        }}
      >
        {text}
      </AppText>
    </TouchableOpacity>
  );
}

export default React.memo(AppBtn);
