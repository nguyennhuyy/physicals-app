import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const styles = StyleSheet.create({
  row: { flexDirection: 'row' },
  rowTitle: {
    color: COLOR.GRAY_4,
    flex: 1,
  },
  rowText: {
    marginLeft: 16,
    flex: 2,
    ...STYLE_GLOBAL.weight600,
  },
  line: {
    backgroundColor: COLOR.BORDER_0,
    height: 1,
    flex: 1,
    marginVertical: 8,
  },
});

function AppRowTable({ data }) {
  const length = data.length;
  return data.map((item, index) => (
    <View key={`${index}${Math.random() * 10000}`}>
      <View style={styles.row}>
        <AppText style={styles.rowTitle}>{item.title}</AppText>
        <AppText style={styles.rowText}>{item.text}</AppText>
      </View>
      {index + 1 < length && <View style={styles.line} />}
    </View>
  ));
}

export default React.memo(AppRowTable);
