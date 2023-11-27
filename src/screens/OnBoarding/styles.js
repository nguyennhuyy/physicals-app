import { Platform, StyleSheet } from "react-native";
import { COLOR, deviceHeight, deviceWidth, FONT_SIZE } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHILE_0,
    // alignItems: 'center',
  },
  content: {
    marginTop: 100,
    alignItems: "center",
  },
  dot: {
    backgroundColor: COLOR.GRAY_4,
    width: 10,
    height: 10,
    borderRadius: 100,
    marginRight: 10,
    opacity: 0.5,
  },
  dotActive: {
    backgroundColor: COLOR.PRIMARY,
    width: 10,
    height: 10,
    borderRadius: 100,
    marginRight: 10,
    opacity: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  activeDot: {
    width: 24,
    height: 10,
    borderRadius: 100,
    backgroundColor: COLOR.PRIMARY,
    marginRight: 10,
    opacity: 1,
  },
  contentContainer: {
    alignItems: "center",
  },
  fullWidth: {
    width: deviceWidth - 32,
  },
  spaceBetween: {
    justifyContent: "space-between",
  },
  contentTitle: {
    fontSize: 28,
    fontWeight: "600",
    alignSelf: "flex-start",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  contentSubTitle: {
    color: COLOR.GRAY_0,
    textAlign: "justify",
    marginHorizontal: 16,
    marginBottom: 40,
  },
  processBar: {
    // marginBottom: 20,
  },
  body: {
    marginTop: 40,
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonNext: {
    // position: 'absolute',
    // right: 0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: -16,
  },
  buttonReturn: {
    // position: 'absolute',
    // left: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  boxButton: {
    flexDirection: "row",
    // flex: 1,
    alignItems: "center",
  },
  colorPrimary: {
    color: COLOR.PRIMARY,
    fontWeight: "500",
  },
  footer: {
    // position: 'absolute',
    // bottom: '20%',
    width: deviceWidth,
    alignItems: "center",
    alignSelf: "center",
  },
  buttonStart: {
    // position: 'absolute',
    // right: 0,
    backgroundColor: COLOR.YELLOW_0,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  colorWhile: {
    color: COLOR.WHILE_0,
  },
  colorYellow: {
    backgroundColor: COLOR.YELLOW_0,
  },
  skip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    position: "absolute",
    right: 0,
    top: 40,
  },
  skipText: {
    ...STYLE_GLOBAL.body0,
    ...STYLE_GLOBAL.weight500,
    color: COLOR.PRIMARY,
  },
});
