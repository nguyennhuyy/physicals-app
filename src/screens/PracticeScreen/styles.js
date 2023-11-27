import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: {
    paddingTop: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  itemTitle: {
    marginLeft: 12,
    flex: 1,
    ...STYLE_GLOBAL.title2,
    color: COLOR.GRAY_0,
  },
});
