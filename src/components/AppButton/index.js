/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import AppText from '../AppText';
import AppIcon from '../AppIcon';
import { FontAwesome } from 'react-native-vector-icons/FontAwesome';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const styles = StyleSheet.create({
  btn: { paddingVertical: 10, paddingHorizontal: 20, borderRadius: 12 },
  text: {
    ...STYLE_GLOBAL.body0,
    alignSelf: 'center',
  },
});

function AppButton(props) {
  const { text, bgc, color, style, onPress, disable } = props;
  return (
    <TouchableOpacity
      disabled={disable}
      onPress={onPress}
      style={[styles.btn, { backgroundColor: bgc }, style]}
    >
      <AppText style={[styles.text, { color: color }]}>{text}</AppText>
    </TouchableOpacity>
  );
}

export default React.memo(AppButton);
