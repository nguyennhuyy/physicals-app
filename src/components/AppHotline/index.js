/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity, Linking, Platform, Alert} from 'react-native';

//Components
import AppText from 'components/AppText';

//Utils
import {SVG_NAME} from 'assets/path';
import STYLE_GLOBAL from 'utils/StyleGlobal';
const phoneNumberString = '1900 88 88 00';
function AppHotline() {
  const onPressHotlineNumber = number => {
    let phoneNumber = '';
    if (Platform.OS === 'android') {
      phoneNumber = `tel:${number.replace(/ /g, '')}`;
    } else {
      phoneNumber = `telprompt:${number.replace(/ /g, '')}`;
    }
    // console.log(phoneNumber);
    // Linking.openURL(phoneNumber);
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        // return Linking.openURL(phoneNumber);
        if (!supported) {
          Alert.alert('Số điện thoại không đúng');
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <TouchableOpacity
      onPress={() => {
        onPressHotlineNumber(phoneNumberString);
      }}>
      <View
        style={{
          backgroundColor: '#00ab55',
          borderRadius: 10,
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 14,
          paddingHorizontal: 8,
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}>
        <View style={{marginRight: 18, zIndex: 10}}>
          <SVG_NAME.HOTLINE_LEFT />
          <View
            style={{
              backgroundColor: '#fff',
              width: 4.84,
              height: 4.84,
              borderRadius: 4.84,
              position: 'absolute',
            }}
          />
          <View
            style={{
              backgroundColor: '#fff',
              width: 2.07,
              height: 2.07,
              borderRadius: 2.07,
              position: 'absolute',
              bottom: 3,
            }}
          />
          <View
            style={{
              backgroundColor: '#fff',
              width: 2.07,
              height: 2.07,
              borderRadius: 2.07,
              position: 'absolute',
              bottom: 1,
              left: 40,
            }}
          />
          <View
            style={{
              backgroundColor: '#fff',
              width: 2.76,
              height: 2.76,
              borderRadius: 2.76,
              position: 'absolute',
              left: 48,
              top: -3,
            }}
          />
        </View>
        <View style={{zIndex: 10}}>
          <AppText style={[STYLE_GLOBAL.title2, STYLE_GLOBAL.WHILE_0]}>
            Hotline
          </AppText>
          <AppText
            style={[
              STYLE_GLOBAL.title2,
              STYLE_GLOBAL.WHILE_0,
              STYLE_GLOBAL.weight900,
            ]}>
            {phoneNumberString}
          </AppText>
        </View>
        <View style={{zIndex: 10, marginBottom: 12}}>
          <SVG_NAME.HOTLINE_RIGHT />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            width: 37.32,
            height: 37.32,
            borderRadius: 37.32,
            position: 'absolute',
            right: 5,
            zIndex: 1,
          }}
          opacity={0.3}
        />
        <View
          style={{
            backgroundColor: '#fff',
            width: 63.58,
            height: 63.58,
            borderRadius: 63.58,
            position: 'absolute',
            right: -8,
            zIndex: 1,
          }}
          opacity={0.25}
        />
        <View
          style={{
            backgroundColor: '#fff',
            width: 91.23,
            height: 91.23,
            borderRadius: 91.23,
            position: 'absolute',
            right: -20,
            zIndex: 1,
          }}
          opacity={0.1}
        />
      </View>
    </TouchableOpacity>
  );
}

export default React.memo(AppHotline);
