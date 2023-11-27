import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: {
    paddingTop: 16,
  },

  //detail
  detailHeading: {
    ...STYLE_GLOBAL.title2,
    color: COLOR.GRAY_0,
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 16,
  },
});
