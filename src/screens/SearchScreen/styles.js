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
    paddingBottom: 4,
  },
  btn: {
    borderRadius: 100,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
    marginRight: 10,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  listTopic: { flexDirection: "row", alignItems: "center" },
  heading_3: {
    ...STYLE_GLOBAL.title2,
    marginBottom: 16,
  },
});
