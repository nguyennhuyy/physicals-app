/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, FlatList } from 'react-native';
import AppText from 'components/AppText';
import { COLOR } from 'utils/AppConst';
import styles from './styles';
import { scalePortrait } from 'utils/responsive';
import ModalBox from 'react-native-modalbox';
import { SVG_NAME } from 'assets/path';
import STYLE_GLOBAL from 'utils/StyleGlobal';

function AppModal({
  iconTitle,
  titleModal,
  containerStyle,
  children,
  showAppModal,
  setShowAppModal,
  closeModal,
  dataModal,
  onSelect,
  style,
  ...otherProps
}) {
  // const [showModal, setShowModal] = useState(false);
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => onSelect(item)}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 16,
        paddingVertical: 12,
      }}
    >
      {item.icon && <View style={{ marginRight: 8 }}>{item.icon}</View>}
      <AppText
        style={[
          STYLE_GLOBAL.title2,
          STYLE_GLOBAL.color_textcontent,
          STYLE_GLOBAL.body1,
        ]}
      >
        {item.name}
      </AppText>
    </TouchableOpacity>
  );

  function EmptyList() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
        }}
      >
        <AppText>Danh sách trống</AppText>
      </View>
    );
  }

  const ItemDivider = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#607D8B',
        }}
      />
    );
  };

  return (
    <ModalBox
      style={[styles.viewModal, containerStyle, style]}
      position="bottom"
      isOpen={showAppModal}
      onClosed={() => setShowAppModal(false)}
      backdropOpacity={0.3}
      {...otherProps}
    >
      <View>
        {titleModal ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                paddingVertical: 8,
              }}
            >
              <TouchableOpacity onPress={() => setShowAppModal(false)}>
                <SVG_NAME.CLOSE_ICON2 />
              </TouchableOpacity>

              <AppText style={{ ...STYLE_GLOBAL.title1 }}>{titleModal}</AppText>
              <View style={{ width: 30, height: 30 }} />
            </View>
          </>
        ) : (
          <View style={{ paddingTop: 16 }} />
        )}
        {/* <FlatList
          data={dataModal || []}
          keyExactor={(item) => item.key}
          renderItem={renderItem}
          ItemSeparatorComponent={ItemDivider}
          ListEmptyComponent={EmptyList}
        /> */}
      </View>
      {children}
    </ModalBox>
  );
}

export default React.memo(AppModal);
