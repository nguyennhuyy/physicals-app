/* eslint-disable react-native/no-inline-styles */
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { useMemo } from 'react';
import AppText from '../AppText';
import { IMG_NAME, SVG_NAME } from 'assets/path';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: {
    color: COLOR.GRAY_0,
    marginLeft: 8,
    ...STYLE_GLOBAL.body1,
  },
});

function AppCheckBox({ item, style, onPress }) {
  return (
    <TouchableOpacity style={[styles.box, style]} onPress={onPress}>
      {item.active ? (
        <SVG_NAME.CHECKBOX_ACTIVE />
      ) : (
        <SVG_NAME.CHECKBOX_INACTIVE />
      )}
      <AppText style={styles.text}>{item.text}</AppText>
    </TouchableOpacity>
  );
}

export default React.memo(AppCheckBox);
