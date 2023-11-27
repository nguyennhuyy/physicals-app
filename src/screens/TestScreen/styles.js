import { StyleSheet } from "react-native";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: {
    padding: 16,
  },
  heading: {
    ...STYLE_GLOBAL.title1,
  },
  heading_3: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 16,
  },
  text: {
    ...STYLE_GLOBAL.title1,
    textAlign: "center",
  },
  highlight: { color: "red", ...STYLE_GLOBAL.title1 },
  notify_test: {
    padding: 12,
    backgroundColor: COLOR.BACK_GROUND_0,
    borderRadius: 12,
    marginBottom: 10,
    marginHorizontal: 16,
  },
  item: {
    padding: 16,
    marginTop: 16,
    borderRadius: 16,
    ...STYLE_GLOBAL.shadowDefault,
    flexDirection: "row",
    alignItems: "center",
  },
  itemTitle: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 4,
  },
  itemDescription: {
    ...STYLE_GLOBAL.body2,
    color: COLOR.GRAY_4,
  },
  box: {
    paddingHorizontal: 16,
    borderColor: COLOR.BORDER_0,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
  },
  boxTitle: { color: COLOR.GRAY_4, ...STYLE_GLOBAL.body2, marginTop: 8 },
  boxText: { color: COLOR.BLACK_0, ...STYLE_GLOBAL.body1, marginVertical: 8 },
  note: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderColor: COLOR.BORDER_0,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 16,
    backgroundColor: COLOR.BACK_GROUND_0,
  },
  notify: {
    alignItems: "center",
    marginBottom: 40,
  },
  notifyContent: {
    ...STYLE_GLOBAL.title2,
    marginTop: 12,
    marginBottom: 4,
    color: COLOR.BLACK_0,
  },
  notifyText: {
    color: COLOR.GRAY_4,
  },
});
