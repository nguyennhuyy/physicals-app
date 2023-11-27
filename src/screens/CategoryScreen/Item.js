import React, { memo } from 'react';
import { View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import NavigationServices from 'navigation/navigationServices';
const deviceWidth = Dimensions.get('window').width;
const widthCategory = (deviceWidth - 80) / 4;

export default function ItemCategory({ item }) {
  return (
    <TouchableOpacity
      // activeOpacity={1}
      style={styles.item}
      onPress={() => item.screen && NavigationServices.navigate(item.screen)}
    >
      <View style={[styles.ranged, { backgroundColor: item.bgBtn }]}>
        <item.icon />
      </View>
      <AppText style={styles.text}>{item.text}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    width: (deviceWidth - 16) / 4,
    alignItems: 'center',
  },
  ranged: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    width: widthCategory,
    height: widthCategory,
    marginTop: 16,
  },
  text: {
    color: COLOR.GRAY_0,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 8,
  },
});
