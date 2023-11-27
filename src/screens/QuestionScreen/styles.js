import { StyleSheet, Dimensions } from "react-native";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { IMG_NAME, SVG_NAME } from "assets/path";

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: { padding: 16 },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 6,
    backgroundColor: COLOR.BLUE_0,
    borderRadius: 8,
    marginBottom: 10,
  },
  btnText: {
    color: COLOR.WHILE_0,
    ...STYLE_GLOBAL.body0,
    marginLeft: 8,
  },
});
