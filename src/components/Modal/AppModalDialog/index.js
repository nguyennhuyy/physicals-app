/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import AppText from 'components/AppText';
import AppButton from 'components/AppButton';
import { COLOR } from 'utils/AppConst';
import styles from './styles';
import { scalePortrait } from 'utils/responsive';
import ModalBox from 'react-native-modalbox';
import { SVG_NAME } from 'assets/path';
import STYLE_GLOBAL from 'utils/StyleGlobal';

function AppModalDialog({
  iconTitle,
  titleModal,
  containerStyle,
  children,
  showModalDialog,
  setShowModalDialog,
  closeModal,
  contentModal,
  titleConfirm,
  titleCancel,
  onUpdate,
  ...otherProps
}) {
  return (
    <ModalBox
      style={styles.viewModalError}
      position="center"
      isOpen={showModalDialog}
      onClosed={() => setShowModalDialog(false)}
      backdropOpacity={0.3}
    >
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <SVG_NAME.CONFIRM_ICON />
        <View
          style={{
            marginTop: 24,
          }}
        >
          {children}
        </View>
        <View style={styles.viewAction}>
          <AppButton
            bgc={COLOR.PRIMARY_1}
            color={COLOR.PRIMARY}
            style={{ flex: 1, marginRight: 16 }}
            text={titleCancel}
            onPress={() => setShowModalDialog(false)}
          />
          <AppButton
            bgc={COLOR.PRIMARY}
            color={COLOR.WHILE_0}
            style={{ flex: 1 }}
            text={titleConfirm}
            onPress={onUpdate}
          />
        </View>
      </View>
    </ModalBox>
  );
}

export default React.memo(AppModalDialog);
