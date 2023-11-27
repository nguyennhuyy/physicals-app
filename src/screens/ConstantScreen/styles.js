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
  heading_1: {
    ...STYLE_GLOBAL.title2,
    flex: 1,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
  btn: {
    flexDirection: "row",
    backgroundColor: COLOR.PURPLE_0,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderRadius: 8,
    marginVertical: 12,
  },
});
