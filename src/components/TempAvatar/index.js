import { StyleSheet, View } from 'react-native';
import React from 'react';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const TempAvatar = ({ data, style, fontSize }) => {
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const color = data ? stringToColor(data) : COLOR.WHITE_2;

  return (
    <View style={[styles.item, { backgroundColor: color }, style]}>
      <AppText style={[styles.text, fontSize]}>
        {data ? data.trim().charAt(0).toUpperCase() : ''}
      </AppText>
    </View>
  );
};

export default TempAvatar;

const styles = StyleSheet.create({
  item: {
    height: 30,
    width: 30,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: COLOR.WHILE_0,
    ...STYLE_GLOBAL.body1,
    lineHeight: 14,
    fontWeight: '600',
    alignSelf: 'center',
    transform: [{ translateY: 2 }],
  },
});
