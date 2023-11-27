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
  login: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: COLOR.BACK_GROUND_0,
    borderRadius: 12,
    borderColor: COLOR.PRIMARY,
    borderWidth: 1,
  },
  item: {
    marginTop: 16,
    backgroundColor: COLOR.WHILE_0,
    padding: 16,
    borderRadius: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
});
