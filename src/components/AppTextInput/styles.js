import { DEFAULT_PREFIX_FONT_FAMILY } from "components/AppText/appFont";
import { StyleSheet, Platform } from "react-native";
import { COLOR, deviceWidth } from "utils/AppConst";
import { scalePortrait } from "utils/responsive";

export default StyleSheet.create({
  view: {
    borderWidth: 1,
    paddingRight: 50,
    height: 52,
    borderRadius: 12,
    flexDirection: "row",
    paddingLeft: Platform.OS === "ios" ? 16 : 12,
    alignItems: "center",
    backgroundColor: COLOR.WHILE_0,
  },
  textInput: {
    color: COLOR.GRAY_0,
    paddingRight: 20,
    width: deviceWidth - scalePortrait(50),
    height: "100%",
    fontFamily: DEFAULT_PREFIX_FONT_FAMILY,
  },
  title: {
    color: COLOR.GRAY_4,
    fontSize: 14,
    marginBottom: 8,
  },
  txtError: {
    color: COLOR.RED_1,
    fontSize: 12,
    marginLeft: 16,
    marginTop: 4,
  },
  margin: {
    marginBottom: 10,
  },
  eye: {
    height: "100%",
    width: "100%",
  },
  animatedStyle: {
    left: 16,
    position: "absolute",
    zIndex: 10000,
    width: "100%",
  },
  icRight: {
    position: "absolute",
    right: 9,
    top: 7.5,
    padding: 10,
  },
  ic: {
    position: "absolute",
    right: 9,
    top: 11,
    padding: 10,
  },
  ic2: {
    position: "absolute",
    right: 40,
    top: 11,
    padding: 10,
  },
});
