import React from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import useTranslate from 'hooks/useTranslate';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import { IMG_NAME, SVG_NAME } from 'assets/path';
import AppButton from 'components/AppButton';
import STYLE_GLOBAL from 'utils/StyleGlobal';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 16,
    backgroundColor: COLOR.WHILE_0,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  quotes: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: COLOR.RED_0_1,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function AppConfirm(props) {
  const { t, i18n } = useTranslate();
  const {
    cancel = true,
    quotes = false,
    cancelText = t('button.cancel'),
    confirmText,
    onPress,
    onReport,
    onCancel,
    style,
    disable = false,
  } = props;
  return (
    <View style={[styles.container, style, disable && { opacity: 0.5 }]}>
      {quotes && (
        <TouchableOpacity
          disabled={disable}
          onPress={onReport}
          style={styles.quotes}
        >
          <SVG_NAME.QUOTES_2 />
        </TouchableOpacity>
      )}
      {cancel && (
        <AppButton
          disable={disable}
          bgc={COLOR.PRIMARY_1}
          color={COLOR.PRIMARY}
          style={{ flex: 1, marginRight: 10 }}
          text={cancelText}
          onPress={onCancel}
        />
      )}
      <AppButton
        disable={disable}
        bgc={COLOR.PRIMARY}
        color={COLOR.WHILE_0}
        style={{ flex: 1 }}
        text={confirmText}
        onPress={onPress}
      />
    </View>
  );
}

export default React.memo(AppConfirm);
