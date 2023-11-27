import { StyleSheet, Dimensions } from "react-native";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
import { IMG_NAME, SVG_NAME } from "assets/path";

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR.WHILE_0,
    flex: 1,
  },
  content: {
    paddingTop: 16,
  },
  btn: {
    flexDirection: "row",
    backgroundColor: COLOR.PURPLE_0,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-start",
    borderRadius: 8,
    marginTop: 8,
  },

  //detail
  detailHeading: {
    ...STYLE_GLOBAL.title2,
    color: COLOR.GRAY_0,
    marginBottom: 8,
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: 16,
  },
});
