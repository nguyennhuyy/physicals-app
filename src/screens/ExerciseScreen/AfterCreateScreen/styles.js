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
