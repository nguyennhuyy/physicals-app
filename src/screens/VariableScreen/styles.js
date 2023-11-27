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
  btn: {
    flexDirection: "row",
    backgroundColor: COLOR.PURPLE_0,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderRadius: 8,
    marginVertical: 8,
  },
  title: { ...STYLE_GLOBAL.title3, marginVertical: 4 },
  formula: { color: COLOR.RED_0, ...STYLE_GLOBAL.weight600, marginVertical: 4 },
  text: {
    ...STYLE_GLOBAL.body1,
    color: COLOR.GRAY_2,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 16,
    marginTop: 16,
  },
});
