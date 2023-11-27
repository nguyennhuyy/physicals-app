import { Platform, StyleSheet } from "react-native";
import { scaleLandscape, scalePortrait } from "utils/responsive";
import { FONT_SIZE, COLOR, CONST_SIZE, ICON_SIZE } from "utils/AppConst";
import { DEFAULT_PREFIX_FONT_FAMILY } from "../AppText/appFont";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default StyleSheet.create({
  boxSelect: {
    height: 52,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLOR.BORDER_0,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  placeholderJob: {
    color: COLOR.GRAY_1,
    marginLeft: 15,
  },
  selectJob: {
    color: COLOR.BLACK_0,
    marginLeft: 15,
  },
  icArrowBottom: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
});
