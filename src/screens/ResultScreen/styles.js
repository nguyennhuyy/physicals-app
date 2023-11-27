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
  heading_4: {
    ...STYLE_GLOBAL.weight600,
    color: COLOR.BLUE_0,
    marginVertical: 4,
  },
  image: {
    width: "100%",
    height: 200,
    alignSelf: "center",
    borderRadius: 16,
    marginTop: 12,
  },
});
