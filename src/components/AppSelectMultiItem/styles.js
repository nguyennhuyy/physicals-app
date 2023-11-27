import { Platform, StyleSheet } from 'react-native';
import { scalePortrait } from 'utils/responsive';
import { FONT_SIZE, COLOR, CONST_SIZE, ICON_SIZE } from 'utils/AppConst';
import { DEFAULT_PREFIX_FONT_FAMILY } from '../AppText/appFont';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    height: scalePortrait(45),
    minHeight: 45,
    borderRadius: CONST_SIZE.BORDER_RADIUS_TEXT_INPUT,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: COLOR.GRAY_5,
    borderWidth: 1,
    zIndex: 2,
  },
  textInput: {
    paddingLeft: scalePortrait(12),
    paddingRight: scalePortrait(8),
    width: '100%',
    ...STYLE_GLOBAL.body2,
    ...STYLE_GLOBAL.weight300,
    lineHeight: 15,
    color: COLOR.GRAY_2,
    fontFamily: DEFAULT_PREFIX_FONT_FAMILY,
    height: '100%',
  },
  txtError: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: 'red',
    fontSize: FONT_SIZE.SMALL,
    paddingHorizontal: scalePortrait(5),
    marginBottom: -scalePortrait(20),
    position: 'absolute',
    bottom: 0,
  },
  heightWithError: {
    height: scalePortrait(60),
  },
  label: {
    color: COLOR.GRAY_2,
    fontSize: FONT_SIZE.SMALL,
  },
  optionsView: {
    position: 'absolute',
    top: scalePortrait(45),
    left: 0,
    borderColor: COLOR.GRAY_2,
    borderWidth: 1,
    width: '100%',
    borderBottomWidth: 1,
    backgroundColor: COLOR.GRAY_5,
  },
  optionsScrollView: (val) => ({
    maxHeight: scalePortrait(45 * val),
    position: 'absolute',
    top: scalePortrait(45),
    left: 0,
    borderColor: COLOR.GRAY_2,
    borderWidth: 1,
    width: '100%',
    borderBottomWidth: 1,
    backgroundColor: COLOR.GRAY_5,
  }),
  optionsItem: {
    backgroundColor: COLOR.GRAY_5,
    height: scalePortrait(45),
    minHeight: 45,
    paddingLeft: scalePortrait(12),
    paddingRight: scalePortrait(8),
    borderRadius: CONST_SIZE.BORDER_RADIUS_TEXT_INPUT,
    justifyContent: 'center',
    borderBottomColor: COLOR.GRAY_2,
    borderBottomWidth: 0.5,
  },
  arrowIcon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 6 : 22,
    right: 15,
  },
  itemTxt: {
    ...STYLE_GLOBAL.body2,
    lineHeight: scalePortrait(16),
    fontWeight: '300',
    color: COLOR.BLACK_1,
    fontFamily: DEFAULT_PREFIX_FONT_FAMILY,
  },
  select: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
});
