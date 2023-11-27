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
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.WHILE_0,
    padding: 16,
    borderRadius: 16,
  },
  profileContent: {
    flex: 1,
    marginHorizontal: 12,
  },
  profileName: {
    marginBottom: 4,
    ...STYLE_GLOBAL.title2,
  },
  profileEmail: {
    color: COLOR.GRAY_5,
  },
  auth: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR.WHILE_0,
    padding: 16,
    borderRadius: 16,
  },
  authText: {
    ...STYLE_GLOBAL.title2,
    flex: 1,
    color: COLOR.PRIMARY,
  },
  box: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 6,
    backgroundColor: COLOR.WHILE_0,
    borderRadius: 16,
    marginTop: 16,
    ...STYLE_GLOBAL.shadowDefault,
  },
  btn: {
    flexDirection: "row",
    marginBottom: 6,
    paddingVertical: 6,
    alignItems: "center",
  },
  text: {
    ...STYLE_GLOBAL.body1,
    flex: 1,
    marginLeft: 12,
  },
});
