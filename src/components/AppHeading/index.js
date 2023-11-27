import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';
import NavigationServices from 'navigation/navigationServices';

const styles = StyleSheet.create({
  heading_2: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLOR.BLUE_0,
    ...STYLE_GLOBAL.title3,
    color: COLOR.WHILE_0,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    ...STYLE_GLOBAL.title1,
    color: COLOR.GRAY_0,
  },
  line: {
    backgroundColor: COLOR.PRIMARY,
    width: 4,
    height: 16,
    borderRadius: 2,
    marginRight: 8,
    marginLeft: 16,
  },
  SeeAll: {
    marginRight: 16,
    ...STYLE_GLOBAL.body1,
    ...STYLE_GLOBAL.weight500,
    color: COLOR.RED_0,
    alignItems: 'center',
  },
});

function AppHeading({
  type = 1,
  navigation,
  title,
  seeAll = true,
  line = true,
  style,
  onPress,
}) {
  const { t, i18n } = useTranslate();
  return type === 1 ? (
    <View style={[styles.heading, style]}>
      {line && <View style={styles.line} />}
      <AppText style={styles.title}>{title}</AppText>
      {seeAll && (
        <TouchableOpacity style={{ padding: 8 }} onPress={onPress}>
          <AppText style={styles.SeeAll}>{t('home.more')}</AppText>
        </TouchableOpacity>
      )}
    </View>
  ) : (
    <AppText style={styles.heading_2}>{title}</AppText>
  );
}

export default React.memo(AppHeading);
