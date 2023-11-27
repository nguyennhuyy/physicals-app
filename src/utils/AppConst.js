import { Dimensions, Platform, StatusBar } from "react-native";
import { scalePortrait } from "./responsive";
export const deviceWidth = Dimensions.get("window").width;
export const deviceHeight = Dimensions.get("window").height;

export const policyLink = "http://huongdanvien.vn/index.php/news/cat/15";
export const trainingFacilitiesLink =
  "http://huongdanvien.vn/index.php/training/cat/10";
export const newsLink = "http://huongdanvien.vn/index.php/news/cat/01";
export const bannerLink = "http://huongdanvien.vn/index.php/news/cat/12";
export const FAQSLink = "https://oneguide.com.vn/ho-tro.html";
export const policyAndPrivacyLink =
  "https://oneguide.com.vn/thong-tin/chinh-sach-bao-mat.html";

//IPHONE X SIZE
export const IS_PHONE_X =
  Platform.OS === "ios" && (deviceWidth >= 812 || deviceHeight >= 812);

export const StatusBarHeight = Platform.select({
  ios: IS_PHONE_X ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});

//Color Constants
export const COLOR = {
  WHILE_0: "#ffffff",
  WHILE_1: "#F7F7F7",
  TITLE_BLACK: "#2C2C2C",
  BLUE_0: "#2299DD",
  BLUE_1: "#71D7F4",
  BLACK_0: "#000000",
  BLACK_1: "#2C2C2C",
  BLACK_2: "#333333",
  GRAY_0: "#252629",
  GRAY_1: "#313337",
  GRAY_2: "#45484E",
  GRAY_3: "#585D63",
  GRAY_4: "#70747C",
  GRAY_5: "#A4A7AD",
  GRAY_6: "#D7D7D8",
  GREEN_0: "#4FBF67",
  GREEN_0_1: "rgba(63, 171, 169, 0.2)",
  GREEN_1: "#3FABA9",
  GREEN_1_1: "rgba(79, 191, 103, 0.2)",
  RED_0: "#D80027",
  RED_0_1: "rgba(216, 0, 39, 0.2)",
  RED_1: "#AF4464",
  YELLOW_0: "#FCA000",
  YELLOW_0_1: "rgba(252, 160, 0, 0.2)",
  ORANGE_0: "#FA8A2E",
  ORANGE_1: "#F98C5C",
  PINK_0: "#EF6087",
  PINK_0_1: "rgba(239, 96, 135, 0.2)",
  BROWN_0: "#986D6A",
  PRIMARY: "#1E54A2",
  PRIMARY_1: " rgba(30, 84, 162, 0.1)",
  PURPLE_0: "#BA59FE",
  PURPLE_0_1: "rgba(186, 89, 254, 0.2)",
  HR: "#F2F2F2",
  BORDER_0: "#EFF0F3",
  BACK_GROUND_0: "#F6F6F6",
  BACK_GROUND_1: "#E5E5E5",
  BACK_GROUND_2: "#F9FAFB",
};

//CONSTANT SIZE PADDING
export const CONST_SIZE = {
  DEFAULT_PADDING_HORIZONTAL: scalePortrait(16),
  DEFAULT_PADDING_VERTICAL: scalePortrait(16),
  ITEM_PADDING_VERTICAL: scalePortrait(8),
  DEVICE_WIDTH: deviceWidth,
  DEVICE_HEIGHT: deviceHeight,
  BORDER_RADIUS: scalePortrait(6),
  BORDER_RADIUS_BUTTON: scalePortrait(4),
  BORDER_RADIUS_TEXT_INPUT: scalePortrait(3),
};

// ICON_SIZE
export const ICON_SIZE = {
  SMALL: scalePortrait(16),
  NORMAL: scalePortrait(24),
  FIT: scalePortrait(26),
  LARGE: scalePortrait(30),
  X_LARGE: scalePortrait(36),
};

// FONT SIZE
export const FONT_SIZE = {
  SMALL: scalePortrait(11),
  NORMAL: scalePortrait(13),
  FIT: scalePortrait(14),
  LARGE: scalePortrait(16),
  X_LARGE: scalePortrait(22),
};

export const ROOT_SCREEN = {
  HOME: "HOME_SCREEN",
  MENU: "MENU_SCREEN",
  NOTIFICATION: "NOTIFICATION_SCREEN",
  CALENDAR: "CALENDAR_SCREEN",
  QRCODE: "QRCODE_SCREEN",
};

export const SCENE_NAMES = {
  SYNC_DATA_SCREEN: "SYNC_DATA_SCREEN",
  ROOTS_SCREEN: "ROOTS_SCREEN",
  GREETING: "GREETING_SCREEN",
  WELLCOME_SCREEN: "WELLCOME_SCREEN",
  HOME_SCREEN: "HOME_SCREEN",
  ARTICLE_SCREEN: "ARTICLE_SCREEN",
  DETAIL_ARTICLE_SCREEN: "DETAIL_ARTICLE_SCREEN",
  PRACTICE_SCREEN: "PRACTICE_SCREEN",
  CATEGORIES_SCREEN: "CATEGORIES_SCREEN",
  ACCOUNT_SCREEN: "ACCOUNT_SCREEN",
  LANGUAGE_SCREEN: "LANGUAGE_SCREEN",
  PROFILE_SCREEN: "PROFILE_SCREEN",
  US_SCREEN: "US_SCREEN",
  FACEBOOK_SCREEN: "FACEBOOK_SCREEN",
  UPDATE_PROFILE_SCREEN: "UPDATE_PROFILE_SCREEN",
  QUESTION_SCREEN: "QUESTION_SCREEN",
  DETAIL_QUESTION_SCREEN: "DETAIL_QUESTION_SCREEN",
  TOPIC_SCREEN: "TOPIC_SCREEN",
  DETAIL_TOPIC_SCREEN: "DETAIL_TOPIC_SCREEN",
  FORMULA_SCREEN: "FORMULA_SCREEN",
  CONSTANT_SCREEN: "CONSTANT_SCREEN",
  LECTURE_SCREEN: "LECTURE_SCREEN",
  DETAIL_LECTURE_SCREEN: "DETAIL_LECTURE_SCREEN",
  DETAIL_FORMULA_SCREEN: "DETAIL_FORMULA_SCREEN",
  DETAIL_CONSTANT_SCREEN: "DETAIL_CONSTANT_SCREEN",
  CREATE_EXERCISE_SCREEN: "CREATE_EXERCISE_SCREEN",
  MANAGE_EXERCISE_SCREEN: "MANAGE_EXERCISE_SCREEN",
  VARIABLE_SCREEN: "VARIABLE_SCREEN",
  DETAIL_VARIABLE_SCREEN: "DETAIL_VARIABLE_SCREEN",
  AFTER_CREATE_EXERCISE_SCREEN: "AFTER_CREATE_EXERCISE_SCREEN",
  TEST_SCREEN: "TEST_SCREEN",
  DO_TEST_SCREEN: "DO_TEST_SCREEN",
  DETAIL_TEST_SCREEN: "DETAIL_TEST_SCREEN",
  COMPLETE_TEST_SCREEN: "COMPLETE_TEST_SCREEN",
  RESULT_SCREEN: "RESULT_SCREEN",
  DETAIL_RESULT_SCREEN: "DETAIL_RESULT_SCREEN",
  THEORY_SCREEN: "THEORY_SCREEN",
  DETAIL_THEORY_SCREEN: "DETAIL_THEORY_SCREEN",
  SEARCH_SCREEN: "SEARCH_SCREEN",
};
