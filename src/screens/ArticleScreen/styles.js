import { StyleSheet } from 'react-native';
import { COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  hr: { height: 4, backgroundColor: COLOR.HR },
  content: {},
  listBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 4,
    marginTop: 16,
  },
  listArticle: {
    marginTop: 8,
  },

  //detail
  heading_2: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: COLOR.BLUE_0,
    ...STYLE_GLOBAL.title3,
    color: COLOR.WHILE_0,
  },
  detailHeading: {
    ...STYLE_GLOBAL.title2,
    color: COLOR.GRAY_0,
    marginBottom: 8,
  },
  detailDescription: {
    ...STYLE_GLOBAL.body1,
    color: COLOR.GRAY_0,
    textAlign: 'justify',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 16,
  },
});
