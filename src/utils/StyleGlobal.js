import { Dimensions, Platform, StatusBar } from 'react-native';
import { scalePortrait } from './responsive';
import { IS_PHONE_X, COLOR } from './AppConst';

//SETUP GLOBAL STYLE check iPad?
const STYLE_GLOBAL = {
  title1: {
    fontSize: scalePortrait(18, 24),
    fontWeight: '600',
    lineHeight: scalePortrait(25, 36),
  },
  title2: {
    fontSize: scalePortrait(16, 24),
    fontWeight: '600',
    lineHeight: scalePortrait(24, 32),
  },
  title3: {
    fontSize: scalePortrait(14, 24),
    fontWeight: '600',
    lineHeight: scalePortrait(20, 32),
  },
  title4: {
    fontSize: scalePortrait(12, 24),
    fontWeight: '600',
    lineHeight: scalePortrait(20, 32),
  },
  body0: {
    fontSize: scalePortrait(16, 20),
    fontWeight: '400',
    lineHeight: scalePortrait(20, 26),
  },
  body1: {
    fontSize: scalePortrait(14, 18),
    fontWeight: '400',
    lineHeight: scalePortrait(20, 26),
  },
  body2: {
    fontSize: scalePortrait(12, 16),
    fontWeight: '400',
    lineHeight: scalePortrait(18, 24),
  },
  body3: {
    fontSize: scalePortrait(10, 14),
    fontWeight: '400',
    lineHeight: scalePortrait(15, 22),
  },
  body4: {
    fontSize: scalePortrait(10, 14),
    fontWeight: '600',
    lineHeight: scalePortrait(15, 22),
  },

  weight700: {
    fontWeight: '700',
  },
  weight600: {
    fontWeight: '600',
  },
  weight500: {
    fontWeight: '500',
  },
  weight400: {
    fontWeight: '400',
  },
  weight300: {
    fontWeight: '300',
  },
  color_primari: {
    color: COLOR.BLUE_1,
  },
  color_secondary: {
    color: COLOR.WHILE_0,
  },
  color_textcontent: {
    color: COLOR.GRAY_2,
  },
  flex1: {
    flex: 1,
  },
  padding: {
    padding: 16,
  },
  margin: {
    margin: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'ios' ? (IS_PHONE_X ? 40 : 35) : 0,
  },
  borderRadius: {
    borderRadius: 8,
  },
  containerBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerFlexEnd: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  containerFlexStart: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  paddingIPX: {
    paddingTop:
      Platform.OS === 'ios' ? (IS_PHONE_X ? 40 : 35) : StatusBar.currentHeight,
  },

  paddingIPX_NoStatusBar: {
    paddingTop: Platform.OS === 'ios' ? (IS_PHONE_X ? 40 : 35) : 0,
  },

  marginBottomTextInput: { marginBottom: Platform.isPad ? 50 : 24 },

  shadowDefault: {
    backgroundColor: '#fff',
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 3,
        shadowOffset: {
          width: 2,
          height: 2,
        },
      },
    }),
  },
};

export default STYLE_GLOBAL;
