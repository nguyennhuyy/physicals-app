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
  heading_3: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 16,
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
});
