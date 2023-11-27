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
  language: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
  },
  languageText: {
    marginLeft: 8,
    ...STYLE_GLOBAL.body1,
    flex: 1,
  },
});
