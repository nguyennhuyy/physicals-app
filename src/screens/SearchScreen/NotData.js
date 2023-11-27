import React from 'react';
import { View } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppText from 'components/AppText';
import AppImage from 'components/AppImage';
import { IMG_NAME, SVG_NAME } from 'assets/path';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default function NotData() {
  const { t, i18n } = useTranslate();
  return (
    <View
      style={{
        padding: 50,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <AppImage
        source={IMG_NAME.NOT_DATA}
        style={{ width: 300, height: 300 }}
      />
      <AppText
        style={{ ...STYLE_GLOBAL.body0, marginTop: 8, color: COLOR.GRAY_4 }}
      >
        {t('search.not_data')}
      </AppText>
    </View>
  );
}
