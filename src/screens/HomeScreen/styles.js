import { StyleSheet } from "react-native";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  hr: { height: 4, backgroundColor: COLOR.HR },
  content: {
    paddingTop: 20,
  },
  contentWrap: {
    marginHorizontal: 16,
  },
  category: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 0,
  },
  sync: {
    ...STYLE_GLOBAL.body0,
    ...STYLE_GLOBAL.weight500,
    marginLeft: 16,
  },
  syncText: {
    color: COLOR.GRAY_4,
    marginTop: 8,
  },
});
