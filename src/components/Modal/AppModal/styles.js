import { StyleSheet } from 'react-native';
export default StyleSheet.create({
  viewModal: {
    height: 'auto',
    // minHeight: '50%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    // paddingHorizontal: 16,
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
  buttonContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
