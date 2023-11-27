import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  container: {
    // backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: {
    padding: 16,
  },
  avatar: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -70,
    width: 130,
    height: 130,
    borderRadius: 65,
    borderColor: COLOR.WHILE_0,
    borderWidth: 5,
    zIndex: 99,
  },
  header: {
    height: 92,
    width: '100%',
    backgroundColor: COLOR.PRIMARY,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  information: {
    marginTop: 72,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    color: COLOR.BLACK_0,
    ...STYLE_GLOBAL.weight600,
  },
  subscribe: {
    color: COLOR.GRAY_5,
  },
  heading: {
    marginBottom: 24,
    ...STYLE_GLOBAL.title2,
  },
  avatarProfile: {
    alignSelf: 'center',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: COLOR.WHILE_0,
    borderWidth: 5,
    zIndex: 99,
  },
  avatarContain: {
    alignSelf: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLOR.PRIMARY,
  },
  avatarUpdate: {
    textAlign: 'center',
    color: COLOR.GREEN_0,
  },
});
