import { StyleSheet, Platform } from 'react-native';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: 'red',
    paddingRight: 16,
    borderRadius: 12,
    // paddingBottom: 8,
    paddingLeft: Platform.OS === 'ios' ? 16 : 12,
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE_0,
  },
  textInput: {
    color: COLOR.BLACK_1,
    marginTop: Platform.OS === 'ios' ? 25 : 20,
    height: Platform.OS === 'ios' ? '75%' : '85%',
    maxHeight: Platform.OS === 'ios' ? '80%' : null,
    textAlignVertical: 'top',
    width: '100%',
  },
  inputNotLabel: {
    color: COLOR.BLACK_1,
    marginTop: 5,
    marginBottom: 10,
    textAlignVertical: 'top',
    width: '100%',
    height: '100%',
  },
  txtError: {
    color: COLOR.RED_1,
    ...STYLE_GLOBAL.body2,
    marginLeft: 16,
    marginTop: 4,
  },
  margin: {
    marginBottom: 16,
  },
  animatedStyle: {
    left: 16,
    width: '70%',
    position: 'absolute',
    zIndex: 10000,
    top: 7,
  },
  countStyle: {
    right: 16,
    position: 'absolute',
    zIndex: 10000,
    ...STYLE_GLOBAL.body2,
  },
});
