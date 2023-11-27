import React from 'react';
import { StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppText from 'components/AppText';
import { IMG_NAME, SVG_NAME } from 'assets/path';
import { COLOR, SCENE_NAMES } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';
import AppImage from 'components/AppImage';
import HTMLView from 'components/HTMLView';
import MATHView from 'components/MATHView';
import NavigationServices from 'navigation/navigationServices';

export default function Item({ item }) {
  const { t, i18n } = useTranslate();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.item}
      onPress={() =>
        NavigationServices.navigate(SCENE_NAMES.DETAIL_VARIABLE_SCREEN, {
          data: item,
        })
      }
    >
      <AppText style={styles.heading}>{item.name}</AppText>
      <MATHView formula={item.display} />
      <AppText style={styles.text}>{item.intro_content}</AppText>
      <MATHView formula={item.content} />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: COLOR.WHILE_0,
    padding: 16,
    ...STYLE_GLOBAL.shadowDefault,
    borderRadius: 16,
    marginBottom: 12,
  },
  heading: {
    ...STYLE_GLOBAL.title2,
    flex: 1,
    color: COLOR.PRIMARY,
    paddingBottom: 4,
    borderBottomColor: COLOR.BORDER_0,
    borderBottomWidth: 1,
  },
  title: { ...STYLE_GLOBAL.title3, marginVertical: 4 },
  formula: { color: COLOR.RED_0, ...STYLE_GLOBAL.weight600, marginVertical: 4 },
  text: {
    ...STYLE_GLOBAL.body1,
    color: COLOR.GRAY_2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
});
