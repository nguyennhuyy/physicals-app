import { StyleSheet } from 'react-native';
import { deviceHeight, COLOR } from 'utils/AppConst';
import STYLE_GLOBAL from 'utils/StyleGlobal';
export default StyleSheet.create({
  viewModal: {
    height: 'auto',
    maxHeight: '50%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingBottom: 12,
  },
  titleModalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  containerButtonModal: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingLeft: 18,
  },
  textButtonModal: [
    STYLE_GLOBAL.title2,
    STYLE_GLOBAL.weight400,
    STYLE_GLOBAL.color_textcontent,
    { marginLeft: 12 },
  ],
  viewModalError: {
    height: 'auto',
    maxHeight: '50%',
    borderRadius: 24,
    padding: 24,
    width: '75%',
    backgroundColor: '#ffffff',
  },
  viewAction: {
    flexDirection: 'row',
    paddingVertical: 4,
    // paddingHorizontal: 18,
    alignItems: 'center',
    marginTop: 24,
  },
});
