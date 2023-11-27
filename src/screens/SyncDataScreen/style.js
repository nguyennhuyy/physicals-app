import { StyleSheet, Dimensions } from "react-native";
import { COLOR } from "utils/AppConst";
import STYLE_GLOBAL from "utils/StyleGlobal";
const deviceWidth = Dimensions.get("window").width;
const widthSyncImage = deviceWidth * 0.6;
const widthSync = deviceWidth * 0.7;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.WHILE_0,
  },
  content: {
    padding: 16,
    flex: 1,
  },
  containerSync: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR.WHILE_0,
  },
  textSync: {
    ...STYLE_GLOBAL.title1,
    ...STYLE_GLOBAL.weight500,
    marginTop: 40,
  },
  image: { width: widthSyncImage, height: widthSyncImage },
  progressBox: {
    height: 10,
    paddingHorizontal: 2,
    justifyContent: "center",
    width: widthSync,
    backgroundColor: COLOR.BACK_GROUND_0,
    borderWidth: 1,
    borderColor: COLOR.BORDER_0,
    borderRadius: 10,
    marginTop: 16,
  },
  progress: {
    backgroundColor: COLOR.PRIMARY,
    height: 6,
    borderRadius: 6,
  },
});
